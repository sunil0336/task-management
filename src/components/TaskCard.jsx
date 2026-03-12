export default function TaskCard({ task, onEdit, onDelete }) {

  const badgeColor = {
    Pending: "bg-yellow-400",
    "In Progress": "bg-blue-400",
    Completed: "bg-green-500"
  };

  return (

    <div className="bg-gray-700 p-5 rounded-xl shadow">

      <div className="flex justify-between mb-3">

        <h3 className="text-lg font-semibold">
          {task.title}
        </h3>

        <span
          className={`text-white text-sm px-2 py-1 rounded ${badgeColor[task.status]}`}
        >
          {task.status}
        </span>

      </div>

      <p className="mb-2 text-white">
        {task.description}
      </p>

      <p className="text-sm text-gray-200 mb-4">
        Due: {task.dueDate}
      </p>

      <div className="flex gap-2">

        <button
          onClick={() => onEdit(task)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  );
}