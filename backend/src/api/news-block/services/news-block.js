'use strict';

/**
 * news-block service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-block.news-block');
