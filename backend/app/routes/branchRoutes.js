const express = require('express');
const branchController = require('../controllers/branchController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Branches
 *   description: Branches management endpoints
 */

/**
 * @swagger
 * /branches:
 *   get:
 *     summary: Get all branches
 *     tags: [Branches]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Branch'
 */
router.get('/branches', branchController.getAllBranches);

/**
 * @swagger
 * /branches/{branchId}:
 *   get:
 *     summary: Get branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the branch
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 */
router.get('/branches/:branchId', branchController.getBranchById);

/**
 * @swagger
 * /branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       201:
 *         description: Branch created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 */
router.post('/branches', branchController.createBranch);

/**
 * @swagger
 * /branches/{branchId}:
 *   put:
 *     summary: Update a branch
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       200:
 *         description: Branch updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 */
router.put('/branches/:branchId', branchController.updateBranch);

/**
 * @swagger
 * /branches/{branchId}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the branch
 *     responses:
 *       204:
 *         description: Branch deleted successfully
 */
router.delete('/branches/:branchId', branchController.deleteBranch);

module.exports = router;
