import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/message`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("API request failed");
        }
        return res.json();
      })
      .then((data) => setApiData(data))
      .catch(() => setError("Cannot connect to backend API"));
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <h1>DevOps Demo App</h1>

        <p>
          React Frontend + Node.js Backend + PostgreSQL + GitHub Actions +
          Render Deploy
        </p>

        <div className="card">
          <h2>API Response</h2>

          {apiData && (
            <>
              <p>{apiData.message}</p>
              <small>
                Database time: {apiData.databaseTime}
              </small>
            </>
          )}

          {error && <p className="error">{error}</p>}

          {!apiData && !error && <p>Loading API...</p>}
        </div>
      </section>
    </main>
  );
}

export default App;