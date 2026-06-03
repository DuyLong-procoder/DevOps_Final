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
    <div className="app">
      <div className="background-blur blur-1"></div>
      <div className="background-blur blur-2"></div>

      <main className="container">
        <section className="hero">
          <span className="badge">🚀 DevOps Final Project v2</span>

          <h1>
            React + Node.js + PostgreSQL
            <span> CI/CD Deployment Pipeline</span>
          </h1>

          <p className="subtitle">
            Modern DevOps architecture using React Frontend, Express Backend,
            PostgreSQL Database, GitHub Actions CI Pipeline and Render Cloud
            Deployment.
          </p>

          <div className="tech-stack">
            <div className="tech">React</div>
            <div className="tech">Node.js</div>
            <div className="tech">PostgreSQL</div>
            <div className="tech">GitHub Actions</div>
            <div className="tech">Render</div>
          </div>

          <div className="card">
            <h2>🔗 API Connection Status</h2>

            {apiData && (
              <>
                <div className="status success">
                  ✅ Backend connected successfully
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <h3>Message</h3>
                    <p>{apiData.message}</p>
                  </div>

                  <div className="info-item">
                    <h3>Database Time</h3>
                    <p>{apiData.databaseTime}</p>
                  </div>
                </div>
              </>
            )}

            {error && (
              <div className="status error">
                ❌ Cannot connect to backend API
              </div>
            )}

            {!apiData && !error && (
              <div className="status loading">
                ⏳ Loading API data...
              </div>
            )}
          </div>

          <div className="footer">
            <p>
              Built with ❤️ for DevOps Final Assignment
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;