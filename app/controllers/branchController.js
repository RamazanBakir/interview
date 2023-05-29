const Branch = require('../../models/Branch');

async function getAllBranches(req, res) {
    try {
        const branches = await Branch.getAllBranches();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ error: 'Bir hata oluştu.' });
    }
}

async function getBranchById(req, res) {
    try {
        const branch = await Branch.getBranchById(req.params.id);
        if (branch) {
            res.json(branch);
        } else {
            res.status(404).json({ error: 'Belirtilen şube bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Bir hata oluştu.' });
    }
}

async function createBranch(req, res) {
    try {
        const branchData = req.body;
        const insertedId = await Branch.createBranch(branchData);
        res.status(201).json({ id: insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Bir hata oluştu.' });
    }
}

async function updateBranch(req, res) {
    try {
        const branchData = req.body;
        const success = await Branch.updateBranch(req.params.id, branchData);
        if (success) {
            res.json({ message: 'Şube başarıyla güncellendi.' });
        } else {
            res.status(404).json({ error: 'Belirtilen şube bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Bir hata oluştu.' });
    }
}

async function deleteBranch(req, res) {
    try {
        const success = await Branch.deleteBranch(req.params.id);
        if (success) {
            res.json({ message: 'Şube başarıyla silindi.' });
        } else {
            res.status(404).json({ error: 'Belirtilen şube bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Bir hata oluştu.' });
    }
}

module.exports = {
    getAllBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
};
