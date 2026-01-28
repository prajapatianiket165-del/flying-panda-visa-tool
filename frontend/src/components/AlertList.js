import { updateAlert, deleteAlert } from "../api";

export default function AlertList({ alerts, refresh }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Country</th>
          <th>City</th>
          <th>Visa Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map(a => (
          <tr key={a.id}>
            <td>{a.country}</td>
            <td>{a.city}</td>
            <td>{a.visaType}</td>
            <td>{a.status}</td>
            <td>
              <button onClick={async () => { await updateAlert(a.id, "Booked"); refresh(); }}>
                Mark Booked
              </button>
              <button onClick={async () => { await deleteAlert(a.id); refresh(); }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
