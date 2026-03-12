import { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, editTask }) {

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: ""
  });

  useEffect(() => {
    if (editTask) {
      setForm(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.title) {
      alert("Task title is required");
      return;
    }

    onSubmit(form);

    setForm({
      title: "",
      description: "",
      status: "Pending",
      dueDate: ""
    });

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 p-5 rounded-xl shadow grid gap-3"
    >

      <input
        name="title"
        placeholder="Task Title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        className="bg-green-500 text-white py-2 rounded"
      >
        {editTask ? "Update Task" : "Add Task"}
      </button>

    </form>

  );
}