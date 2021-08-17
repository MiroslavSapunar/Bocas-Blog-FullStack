'use strict';
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const featured = async (ctx) => {
    const entities = await strapi.services.post.featured(ctx.query);
    return entities;
};

const news = async (ctx) => {
    const entities = await strapi.services.post.news(ctx.query);
    return entities;
};

const trending = async (ctx) => {
    const entities = await strapi.services.post.trending(ctx.query);
    return entities;
};

const novedades = async (ctx) => {
    const entities = await strapi.services.post.novedades(ctx.query);
    return entities;
};

const nutricion = async (ctx) => {
    const entities = await strapi.services.post.nutricion(ctx.query);
    return entities;
};

const recetas = async (ctx) => {
    const entities = await strapi.services.post.recetas(ctx.query);
    return entities;
};

const ecologia = async (ctx) => {
    const entities = await strapi.services.post.ecologia(ctx.query);
    return entities;
};

const busqueda = async (ctx) => {
    const entities = await strapi.services.post.busqueda(ctx.query);
    return entities;
};

module.exports = {
    featured,
    news,
    trending,
    novedades,
    nutricion,
    recetas,
    ecologia,
    busqueda
};

