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
        components: {
            schemas: {
                Branch: {
                    type: 'object',
                    properties: {
                        latitude: {
                            type: 'number',
                            format: 'float',
                        },
                        longitude: {
                            type: 'number',
                            format: 'float',
                        },
                        name: {
                            type: 'string',
                        },
                        full_address: {
                            type: 'string',
                        },
                        branch_id: {
                            type: 'string',
                        },
                        phone: {
                            type: 'string',
                        },
                    },
                    required: ['latitude', 'longitude', 'name', 'full_address', 'branch_id', 'phone'],
                },
            },
        },
    },
    apis: ['./app/routes/*.js'],
};

const specs = swaggerJsDoc(options);

module.exports = specs;
