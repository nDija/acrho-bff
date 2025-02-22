import { v4 as uuidv4 } from "uuid";

interface Runner {
  id: string;
  name: string;
  age: number;
  team: string;
}

// Simule une base de données en mémoire
let runners: Runner[] = [
  { id: "1", name: "John Doe", age: 25, team: "Team A" },
  { id: "2", name: "Jane Smith", age: 28, team: "Team B" }
];

export const getAllRunners = async (): Promise<Runner[]> => {
  return runners;
};

export const getRunnerById = async (id: string): Promise<Runner | null> => {
  return runners.find((runner) => runner.id === id) || null;
};

export const createRunner = async (runnerData: Omit<Runner, "id">): Promise<Runner> => {
  const newRunner: Runner = {
    id: uuidv4(),
    ...runnerData
  };
  runners.push(newRunner);
  return newRunner;
};

export const updateRunner = async (
  id: string,
  updateData: Partial<Omit<Runner, "id">>
): Promise<Runner | null> => {
  const index = runners.findIndex((runner) => runner.id === id);
  if (index === -1) {
    return null;
  }
  runners[index] = { ...runners[index], ...updateData };
  return runners[index];
};

export const deleteRunner = async (id: string): Promise<boolean> => {
  const initialLength = runners.length;
  runners = runners.filter((runner) => runner.id !== id);
  return runners.length < initialLength;
};