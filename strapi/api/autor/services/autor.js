'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const aggFind = ({ params = "" }) => [
    {
        $lookup: {
            from: 'upload_file',
            localField: 'foto',
            foreignField: '_id',
            as: 'foto'
        }
    },
    {
        $project: {
            nombre: 1,
            seo_url: 1,
            bio: 1,
            link_personal: 1,
            foto: {
                url: 1,
                formats: {
                    small: {
                        url: 1
                    }
                }
            }
        }
    }
    // { $skip: parseInt(_start) },
    // { $limit: parseInt(_limit) }
]

const aggFindOneSeoUrl = ({ seo = "" }) => [
    {
        $match: { seo_url: seo }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'foto',
            foreignField: '_id',
            as: 'foto'
        }
    },
    {
        $lookup: {
            from: 'Posts',
            localField: '_id',
            foreignField: 'autor',
            as: 'posts'
        }
    },
    {
        $unwind: {
            path: '$posts',
            preserveNullAndEmptyArrays: false
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'posts.imagenes',
            foreignField: '_id',
            as: 'posts.imagenes'
        }
    },
    {
        $lookup: {
            from: 'categorias',
            localField: 'posts.categorias',
            foreignField: '_id',
            as: 'posts.categorias'
        }
    },
    {
        $sort: {
            "posts.fecha": -1
        }
    },
    {
        $group: {
            _id: "$_id",
            posts: { $push: "$posts" },
            nombre: { $first: "$nombre" },
            seo_url: { $first: "$seo_url" },
            bio: { $first: "$bio" },
            link_personal: { $first: "$link_personal" },
        }
    },
    {
        $project: {
            nombre: 1,
            seo_url: 1,
            bio: 1,
            link_personal: 1,
            posts: {
                titulo: 1,
                fecha: 1,
                resumen: 1,
                seo_url: 1,
                tiempo_lectura: 1,
                autor_nombre: "$nombre",
                autor_seo: "$seo_url",
                categorias: {
                    categoria: 1
                },
                imagenes: {
                    url: 1,
                    formats: {
                        small: {
                            url: 1
                        }
                    }
                }
            },
            foto: {
                url: 1,
                formats: {
                    small: {
                        url: 1
                    }
                }
            }
        }
    }
    // { $skip: parseInt(_start) },
    // { $limit: parseInt(_limit) }
]

const find = async (params, populate) => {
    const query = await strapi.query('autor').model.aggregate(
        aggFind(params)
    );
    return query
};

const findOneSeoUrl = async (params, populate) => {
    console.log(params)
    const query = await strapi.query('autor').model.aggregate(
        aggFindOneSeoUrl(params)
    );
    return query
};

module.exports = {
    find,
    findOneSeoUrl
};
