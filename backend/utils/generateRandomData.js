const faker = require('faker');
const connection = require('../config/database');

function generateRandomData() {
    const branches = [];

    for (let i = 0; i < 10; i++) {
        const branch = {
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            name: faker.company.companyName(),
            full_address: faker.address.streetAddress(),
            branch_id: faker.random.uuid(),
            phone: faker.phone.phoneNumber()
        };

        branches.push(branch);
    }

    const query = 'INSERT INTO branches (latitude, longitude, name, full_address, branch_id, phone) VALUES ?';
    const values = branches.map((branch) => [
        branch.latitude,
        branch.longitude,
        branch.name,
        branch.full_address,
        branch.branch_id,
        branch.phone
    ]);

    connection.query(query, [values], (err, result) => {
        if (err) {
            console.error('Veri ekleme hatası:', err);
        } else {
            console.log('Rastgele veriler başarıyla eklendi.');
        }
    });
}

generateRandomData();
