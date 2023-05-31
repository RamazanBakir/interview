const db = require('../../config/database');

// Tüm şubeleri getir
exports.getAllBranches = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM branches';
        db.query(query, (error, results) => {

            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Yeni bir şube oluştur
exports.createBranch = (branchData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO branches SET ?';
        db.query(query, branchData, (error, result) => {
            if (error) {
                reject(error);
            } else {
                const createdBranch = { branch_id: result.insertId, ...branchData };
                resolve(createdBranch);
            }
        });
    });
};

// Şube bilgilerini güncelle
exports.updateBranch = (branchId, branchData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE branches SET ? WHERE branch_id = ?';
        db.query(query, [branchData, branchId], (error, result) => {
            if (error) {
                reject(error);
            } else if (result.affectedRows === 0) {
                resolve(null);
            } else {
                resolve(branchData);
            }
        });
    });
};

// Şube sil
exports.deleteBranch = (branchId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM branches WHERE branch_id = ?';
        db.query(query, branchId, (error, result) => {
            if (error) {
                reject(error);
            } else if (result.affectedRows === 0) {
                resolve(null);
            } else {
                resolve(branchId);
            }
        });
    });
};

// Şube bilgisini ID'ye göre getir
exports.getBranchById = (branchId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM branches WHERE branch_id = ?';
        db.query(query, branchId, (error, results) => {
            if (error) {
                reject(error);
            } else if (results.length === 0) {
                resolve(null);
            } else {
                const branch = results[0];
                resolve(branch);
            }
        });
    });
};
