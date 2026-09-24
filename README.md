# Bocas Blog — full stack

Deployment stack for **Bocas**, a conscious-consumption marketplace and blog. This repo is the orchestration layer only: it wires the front end, the CMS and the database together and puts a reverse proxy in front of them.

The front end lives in [Bocas-Blog_FrontEnd](https://github.com/MiroslavSapunar/Bocas-Blog_FrontEnd), pulled in as a submodule. `.gitmodules` still points at that repo's former name (`Bocas-Blog`); GitHub redirects it, so clones work, but the URL is stale.

Built in 2021 as self-employed client work.

## Services

| Service | Image | Role |
|---|---|---|
| `nginx-proxy` | `jwilder/nginx-proxy` | Routes by virtual host, so front end and API get real hostnames in dev |
| `web` | `node:14-buster-slim` | Next.js front end, source bind-mounted from the `bocas-blog` submodule |
| `strapi` | `strapi/strapi:alpine` | CMS — content types, media uploads |
| `mongo` | `mongo:4-bionic` | Strapi's datastore, persisted to `./data/mongo` |

`nginx-proxy` reads each container's `VIRTUAL_HOST` and routes to it, so locally the app is reachable at `local.bocas-blog.com.ar` and the CMS at `local.api.bocas-blog.com.ar` rather than on bare ports. That keeps dev URLs shaped like production, which matters because Strapi generates absolute media URLs.

## Layout

```
bocas-blog/    Front end (git submodule)
strapi/        CMS source, bind-mounted into the Strapi container
data/          Mongo data and Strapi uploads — persisted, gitignored
db-dump/       Mounted into the Mongo container for restores
docker-compose.yml       Development
docker-compose.prod.yml  Production
```

## Running it

```bash
git clone --recurse-submodules https://github.com/MiroslavSapunar/Bocas-Blog-FullStack.git
cd Bocas-Blog-FullStack
docker compose up
```

Needs a `.env` with:

```
MONGO_USER  MONGO_PASS
ADMIN_JWT_SECRET  STRAPI_API_KEY
STRAPI_URL_PUBLIC  STRAPI_URL_BUILD
```

Add `local.bocas-blog.com.ar` and `local.api.bocas-blog.com.ar` to `/etc/hosts` pointing at `127.0.0.1`.

Production uses `docker-compose.prod.yml`.

## Known drift

The compose file passes `NEXT_PUBLIC_STRAPI_URL` to the `web` service, but the front end reads `NEXT_PUBLIC_URL_STRAPI`. The names were transposed at some point and never reconciled, so the browser-facing Strapi URL has to be supplied to the front end directly.
