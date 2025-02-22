import express from "express";
import * as runnerController from "../controllers/runner.controller";

const router = express.Router();

/**
 * @swagger
 * /runners:
 *   get:
 *     summary: Retourne la liste de tous les runners.
 *     tags: [Runners]
 *     responses:
 *       200:
 *         description: Liste des runners.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: L'ID du runner.
 *                   name:
 *                     type: string
 *                     description: Le nom du runner.
 *                   age:
 *                     type: integer
 *                     description: L'âge du runner.
 *                   team:
 *                     type: string
 *                     description: L'équipe du runner.
 */
router.get("/", runnerController.getAllRunners);

/**
 * @swagger
 * /runners/{id}:
 *   get:
 *     summary: Retourne un seul runner par ID.
 *     tags: [Runners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du runner.
 *     responses:
 *       200:
 *         description: Détails du runner.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: L'ID du runner.
 *                 name:
 *                   type: string
 *                   description: Le nom du runner.
 *                 age:
 *                   type: integer
 *                   description: L'âge du runner.
 *                 team:
 *                   type: string
 *                   description: L'équipe du runner.
 *       404:
 *         description: Runner non trouvé.
 */
router.get("/:id", runnerController.getRunnerById);

/**
 * @swagger
 * /runners:
 *   post:
 *     summary: Crée un nouveau runner.
 *     tags: [Runners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom du runner.
 *               age:
 *                 type: integer
 *                 description: L'âge du runner.
 *               team:
 *                 type: string
 *                 description: L'équipe du runner.
 *     responses:
 *       201:
 *         description: Runner créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: L'ID du runner.
 *                 name:
 *                   type: string
 *                   description: Le nom du runner.
 *                 age:
 *                   type: integer
 *                   description: L'âge du runner.
 *                 team:
 *                   type: string
 *                   description: L'équipe du runner.
 *       400:
 *         description: Missing argument.
 *       500:
 *         description: Something wrong
 */
router.post("/", runnerController.createRunner);

/**
 * @swagger
 * /runners/{id}:
 *   put:
 *     summary: Met à jour un runner existant.
 *     tags: [Runners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du runner à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom du runner.
 *               age:
 *                 type: integer
 *                 description: L'âge du runner.
 *               team:
 *                 type: string
 *                 description: L'équipe du runner.
 *     responses:
 *       200:
 *         description: Runner mis à jour avec succès.
 *       404:
 *         description: Runner non trouvé.
 */
router.put("/:id", runnerController.updateRunner);

/**
 * @swagger
 * /runners/{id}:
 *   delete:
 *     summary: Supprime un runner existant.
 *     tags: [Runners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du runner à supprimer.
 *     responses:
 *       204:
 *         description: Runner supprimé avec succès (pas de contenu retourné).
 *       404:
 *         description: Runner non trouvé.
 */
router.delete("/:id", runnerController.deleteRunner);

export default router;