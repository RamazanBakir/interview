const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Branches API',
            version: '1.0.0',
            description: 'API belgeleri',
        },
    },
    apis: ['index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
