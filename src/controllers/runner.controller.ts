import { Request, Response } from "express";
import * as runnerService from "../services/runner.service";

/**
 * GET /runners
 * Récupère la liste de tous les runners.
 */
export const getAllRunners = async (req: Request, res: Response) => {
  try {
    const runners = await runnerService.getAllRunners();
    res.json(runners);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch runners." });
  }
};

/**
 * GET /runners/:id
 * Récupère un runner par son ID.
 */
export const getRunnerById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const runner = await runnerService.getRunnerById(id);
    if (runner) {
      res.json(runner);
    } else {
      res.status(404).json({ error: "Runner not found." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch runner." });
  }
};

/**
 * POST /runners
 * Ajoute un nouveau runner.
 */
export const createRunner = async (req: Request, res: Response) => {
  const { name, age, team } = req.body;

  if (!name || !age || !team) {
    res.status(400).json({ error: "Name, age, and team are required." });
  }

  try {
    const newRunner = await runnerService.createRunner({ name, age, team });
    res.status(201).json(newRunner);
  } catch (err) {
    res.status(500).json({ error: "Failed to create runner." });
  }
};

/**
 * PUT /runners/:id
 * Met à jour les informations d'un runner.
 */
export const updateRunner = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, team } = req.body;

  try {
    const updatedRunner = await runnerService.updateRunner(id, { name, age, team });
    if (updatedRunner) {
      res.json(updatedRunner);
    } else {
      res.status(404).json({ error: "Runner not found." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to update runner." });
  }
};

/**
 * DELETE /runners/:id
 * Supprime un runner.
 */
export const deleteRunner = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const isDeleted = await runnerService.deleteRunner(id);
    if (isDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Runner not found." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to delete runner." });
  }
};