import { useState, useEffect } from "react";
import { fetchTasks } from "../services/api";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now()
    };

    setTasks([...tasks, newTask]);
  };

  const updateTask = (task) => {

    setTasks(
      tasks.map((t) =>
        t.id === task.id ? task : t
      )
    );

    setEditTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleSubmit = (task) => {

    if (editTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

  };

  const filteredTasks =
    status === "All"
      ? tasks
      : tasks.filter((t) => t.status === status);

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Task Management Dashboard
      </h1>

      

      <div className="mb-6">
        <TaskForm
          onSubmit={handleSubmit}
          editTask={editTask}
        />
      </div>

      <div className="mb-6">
        <FilterBar status={status} setStatus={setStatus} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredTasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
            onEdit={setEditTask}
            onDelete={deleteTask}
          />

        ))}

      </div>

    </div>

  );
}