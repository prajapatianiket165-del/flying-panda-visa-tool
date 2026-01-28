import { useState } from "react";
import { createAlert } from "../api";

export default function AlertForm({ refresh }) {
  const [form, setForm] = useState({ country: "", city: "", visaType: "Tourist" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAlert(form);
    setForm({ country: "", city: "", visaType: "Tourist" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input placeholder="Country" value={form.country}
        onChange={e => setForm({ ...form, country: e.target.value })} />
      <input placeholder="City" value={form.city}
        onChange={e => setForm({ ...form, city: e.target.value })} />
      <select value={form.visaType}
        onChange={e => setForm({ ...form, visaType: e.target.value })}>
        <option>Tourist</option>
        <option>Business</option>
        <option>Student</option>
      </select>
      <button type="submit">Add Alert</button>
    </form>
  );
}
