const branchRepository = require('../repositories/branchRepository');
const Branch = require('../../models/Branch');

// Tüm şubeleri getir
exports.getAllBranches = async () => {
    return await branchRepository.getAllBranches();
};

// Yeni bir şube oluştur
exports.createBranch = async (branchData) => {
    return await branchRepository.createBranch(branchData);
};

// Şube bilgilerini güncelle
exports.updateBranch = async (branchId, branchData) => {
    return await branchRepository.updateBranch(branchId, branchData);
};

// Şube sil
exports.deleteBranch = async (branchId) => {
    return await branchRepository.deleteBranch(branchId);
};

// Şube bilgisini ID'ye göre getir
exports.getBranchById = async (branchId) => {
    return await branchRepository.getBranchById(branchId);
};
