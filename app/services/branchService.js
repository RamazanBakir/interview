const branchRepository = require('../repositories/branchRepository');

async function getAllBranches() {
    return branchRepository.getAllBranches();
}

async function getBranchById(id) {
    return branchRepository.getBranchById(id);
}

async function createBranch(branchData) {
    return branchRepository.createBranch(branchData);
}

async function updateBranch(id, branchData) {
    return branchRepository.updateBranch(id, branchData);
}

async function deleteBranch(id) {
    return branchRepository.deleteBranch(id);
}

module.exports = {
    getAllBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
};
