const branchService = require('../services/branchService');

// Tüm şubeleri listele
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await branchService.getAllBranches();
        res.json(branches);
    } catch (error) {
        console.error('Şubeler alınamadı.', error);
        res.status(500).json({ error: 'Şubeler alınamadı.' });
    }
};


// Şube oluştur
exports.createBranch = async (req, res) => {
    const { latitude, longitude, name, full_address, phone } = req.body;

    try {
        const branch = await branchService.createBranch({ latitude, longitude, name, full_address, phone });
        res.status(201).json(branch);
    } catch (error) {
        console.error('Şube oluşturulamadı.', error);
        res.status(500).json({ error: 'Şube oluşturulamadı.' });
    }
};

// Şube güncelle
exports.updateBranch = async (req, res) => {
    const { branchId } = req.params;
    const { latitude, longitude, name, full_address, phone } = req.body;

    try {
        const branch = await branchService.updateBranch(branchId, { latitude, longitude, name, full_address, phone });
        if (branch) {
            res.json(branch);
        } else {
            res.status(404).json({ error: 'Şube bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Şube güncellenemedi.' });
    }
};

// Şube sil
exports.deleteBranch = async (req, res) => {
    const { branchId } = req.params;

    try {
        const deletedBranch = await branchService.deleteBranch(branchId);
        if (deletedBranch) {
            res.json({ message: 'Şube silindi.' });
        } else {
            res.status(404).json({ error: 'Şube bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Şube silinemedi.' });
    }
};
// Şube bilgisini ID'ye göre getir
exports.getBranchById = async (req, res) => {
    const { branchId } = req.params;
    try {
        const branch = await branchService.getBranchById(branchId);
        if (branch) {
            res.json(branch);
        } else {
            res.status(404).json({ error: 'Şube bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Şube alınamadı.' });
    }
};
