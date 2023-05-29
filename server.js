const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const branchRoutes = require('./app/routes/branchRoutes');
const app = express();

// TODO: daha sonra swagger eklenecek
// const setupSwagger = require('./swagger');


dotenv.config();
app.use(bodyParser.json());
app.use('/api/branches', branchRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
});
