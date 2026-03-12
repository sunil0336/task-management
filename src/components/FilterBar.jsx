export default function FilterBar({ status, setStatus }) {

  return (

    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border p-2 rounded"
    >

      <option value="All">All Tasks</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>

    </select>

  );

}