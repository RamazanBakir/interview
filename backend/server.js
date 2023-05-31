const express = require('express');
const app = express();
const branchRoutes = require('./app/routes/branchRoutes');
const database = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swagger');

// Middleware'lerin eklenmesi
app.use(express.json());

app.use('/api', branchRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Veritabanına bağlantının sağlanması
database
    .authenticate()
    .then(() => {
        console.log('Veritabanına bağlandı.');

        // Server'ın başlatılması
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server ${port} portunda çalışıyor.`);
        });
    })
    .catch((error) => {
        console.error('Veritabanına bağlanılamadı.', error);
    });
