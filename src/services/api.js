import tasks from "../data/tasks.json";

export const fetchTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 500);
  });
};