'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const findOneSeoUrl = async (ctx) => {
    // console.log(ctx.params)
    const entities = await strapi.services.autor.findOneSeoUrl(ctx.params);
    return entities;
};

module.exports = {
    findOneSeoUrl
};
