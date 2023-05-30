const express = require('express');
const branchController = require('../controllers/branchController');

const router = express.Router();

// Tüm şubeleri getir
router.get('/branches', branchController.getAllBranches);

// Şube bilgisini ID'ye göre getir
router.get('/branches/:branchId', branchController.getBranchById);

// Yeni bir şube oluştur
router.post('/branches', branchController.createBranch);

// Şube güncelle
router.put('/branches/:branchId', branchController.updateBranch);

// Şube sil
router.delete('/branches/:branchId', branchController.deleteBranch);

module.exports = router;
