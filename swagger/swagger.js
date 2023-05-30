const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Branch API',
            version: '1.0.0',
            description: 'API documentation for Branches',
        },
    },
    apis: ['./app/routes/*.js'],
};

const specs = swaggerJsDoc(options);

module.exports = specs;
