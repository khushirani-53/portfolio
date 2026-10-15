
import React, { useState } from "react";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3003";

function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      if (!data.token) {
        throw new Error("Login succeeded, but no token was returned.");
      }

      setToken(data.token);
      setPassword("");
      await loadMessages(data.token);
    } catch (err) {
      setError(
        err.message || "Unable to connect to the backend."
      );
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (authToken = token) => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not load messages.");
      }

      setMessages(data);
    } catch (err) {
      setError(
        err.message || "Unable to load messages."
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken("");
    setMessages([]);
    setPassword("");
    setError("");
  };

  return (
    <div className="container py-5">
      {!token ? (
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm p-4">
              <h2 className="mb-3">Admin Login</h2>
              <p>Sign in to view your portfolio contact messages.</p>

              <form onSubmit={login}>
                <label htmlFor="admin-password" className="form-label">
                  Admin Password
                </label>

                <input
                  id="admin-password"
                  type="password"
                  className="form-control mb-3"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="btn text-white w-100"
                  style={{ backgroundColor: "#6C5CE7" }}
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </form>

              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h2>Contact Messages</h2>
              <p className="text-muted mb-0">
                Messages received through your portfolio
              </p>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-primary"
                onClick={() => loadMessages()}
                disabled={loading}
              >
                Refresh
              </button>

              <button className="btn btn-outline-danger" onClick={logout}>
                Logout
              </button>
            </div>
          </div>

          {error && <p className="text-danger">{error}</p>}

          {loading && <p>Loading messages...</p>}

          {!loading && !error && messages.length === 0 && (
            <p>No contact messages found.</p>
          )}

          <div className="row g-3">
            {messages.map((item) => (
              <div className="col-md-6" key={item._id}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5>{item.name}</h5>

                    <p>
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </p>

                    <p className="text-break">{item.message}</p>

                    <small className="text-muted">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : "Date unavailable"}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
