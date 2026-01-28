import { useEffect, useState } from "react";
import AlertForm from "./components/AlertForm";
import AlertList from "./components/AlertList";
import { getAlerts } from "./api";

function App() {
  const [alerts, setAlerts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadAlerts = async (pg = page) => {
    const res = await getAlerts(pg);
    setAlerts(res.data);
    setTotalPages(res.totalPages);
  };

  useEffect(() => {
    loadAlerts(page);
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Visa Slot Alerts</h1>
      <AlertForm refresh={() => loadAlerts(page)} />
      <AlertList alerts={alerts} refresh={() => loadAlerts(page)} />

      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;

