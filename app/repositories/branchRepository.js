const Branch = require('../../models/Branch');

async function getAllBranches() {
    return Branch.find();
}

async function getBranchById(id) {
    return Branch.findById(id);
}

async function createBranch(branchData) {
    const branch = new Branch(branchData);
    return branch.save();
}

async function updateBranch(id, branchData) {
    return Branch.findByIdAndUpdate(id, branchData, { new: true });
}

async function deleteBranch(id) {
    return Branch.findByIdAndDelete(id);
}

module.exports = {
    getAllBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
};
