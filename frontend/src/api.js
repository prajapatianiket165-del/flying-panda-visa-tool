const BASE_URL = "http://localhost:5000/alerts";

export const getAlerts = (page = 1) =>
  fetch(`${BASE_URL}?page=${page}&limit=5`).then(res => res.json());

export const createAlert = (data) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const updateAlert = (id, status) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });

export const deleteAlert = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
