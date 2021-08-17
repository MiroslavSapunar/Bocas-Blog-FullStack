'use strict';

const aggFeatured = ({ params = "", _limit = 5 }) => [
    {
        $match: { destacado: true }
    },
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    medium: {
                        url: 1
                    },
                    small: {
                        url: 1
                    },
                    thumbnail: {
                        url: 1
                    }
                }
            }
        }
    },
    // { $skip: parseInt(_start) },
    { $limit: parseInt(_limit) }
]

const aggNews = ({ params = "" }) => [
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    thumbnail: {
                        url: 1
                    },
                }
            }
        }
    },
    // { $skip: parseInt(_start) },
    { $limit: parseInt(3) }
]

const aggTrending = ({ params = "" }) => [
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $sort: { vistas: 1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            }
        }
    },
    // { $skip: parseInt(_start) },
    { $limit: parseInt(6) }
]

const aggNovedades = ({ params = "" }) => [
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    thumbnail: {
                        url: 1
                    },
                    small: {
                        url: 1
                    }
                }
            }
        }
    },
    // { $skip: parseInt(_start) },
    // { $limit: parseInt(3) }
]

const aggNutricion = ({ params = "" }) => [
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $match: {
            "categorias.url": "nutricion"
        }
    },
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    thumbnail: {
                        url: 1
                    },
                    small: {
                        url: 1
                    }
                }
            }
        }
    },
    // { $skip: parseInt(_start) },
    { $limit: parseInt(3) }
]

const aggRecetas = ({ params = "" }) => [
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $match: {
            "categorias.url": "recetas"
        }
    },
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    thumbnail: {
                        url: 1
                    },
                    small: {
                        url: 1
                    }
                }
            }
        }
    },
    // { $skip: parseInt(_start) },
    { $limit: parseInt(3) }
]

const aggEcologia = ({ params = "" }) => [
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $match: {
            "categorias.url": "ecologia"
        }
    },
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    thumbnail: {
                        url: 1
                    },
                    small: {
                        url: 1
                    }
                }
            }
        }
    },
    // { $skip: parseInt(_start) },
    { $limit: parseInt(3) }
]

const aggBusqueda = ({ busqueda = "" }) => [
    {
        $match: {
            titulo: { $regex: busqueda, $options: 'i' }
        }
    },
    {
        $lookup: {
            from: 'categorias',
            localField: 'categorias',
            foreignField: '_id',
            as: 'categorias'
        }
    },
    {
        $lookup: {
            from: 'Autores',
            localField: 'autor',
            foreignField: '_id',
            as: 'autor'
        }
    },
    {
        $lookup: {
            from: 'upload_file',
            localField: 'imagenes',
            foreignField: '_id',
            as: 'imagenes'
        }
    },
    {
        $sort: { fecha: -1 }
    },
    {
        $project: {
            titulo: 1,
            fecha: 1,
            tiempo_lectura: 1,
            seo_url: 1,
            autor: {
                nombre: 1,
                seo_url: 1
            },
            categorias: {
                categoria: 1,
                url: 1
            },
            resumen: 1,
            imagenes: {
                url: 1,
                formats: {
                    thumbnail: {
                        url: 1
                    },
                    small: {
                        url: 1
                    }
                }
            }
        }
    },
]

const featured = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggFeatured(params)
    );
    return query
};

const news = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggNews(params)
    );
    return query
};

const trending = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggTrending(params)
    );
    return query
};

const novedades = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggNovedades(params)
    );
    return query
};

const nutricion = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggNutricion(params)
    );
    return query
};

const recetas = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggRecetas(params)
    );
    return query
};

const ecologia = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggEcologia(params)
    );
    return query
};

const busqueda = async (params, populate) => {
    const query = await strapi.query('post').model.aggregate(
        aggBusqueda(params)
    );
    return query
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
