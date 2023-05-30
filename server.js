const express = require('express');
const app = express();
const branchRoutes = require('./app/routes/branchRoutes');
const database = require('./config/database');

// Middleware'lerin eklenmesi
app.use(express.json());

// so
app.use('/api', branchRoutes);

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
