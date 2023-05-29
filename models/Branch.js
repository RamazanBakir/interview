const connection = require('../config/database');

const Branch = {};

Branch.getAllBranches = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM branches';
        connection.query(query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

Branch.getBranchById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM branches WHERE id = ?';
        connection.query(query, [id], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                if (rows.length > 0) {
                    resolve(rows[0]);
                } else {
                    resolve(null);
                }
            }
        });
    });
};

Branch.createBranch = (branchData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO branches SET ?';
        connection.query(query, branchData, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    });
};

Branch.updateBranch = (id, branchData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE branches SET ? WHERE id = ?';
        connection.query(query, [branchData, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.affectedRows > 0);
            }
        });
    });
};

Branch.deleteBranch = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM branches WHERE id = ?';
        connection.query(query, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.affectedRows > 0);
            }
        });
    });
};

module.exports = Branch;