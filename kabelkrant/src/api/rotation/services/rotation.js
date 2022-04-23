'use strict';

/**
 * rotation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rotation.rotation');
