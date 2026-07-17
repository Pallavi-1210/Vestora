import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password },
        { withCredentials: true },
      );

      alert(res.data.message);

      // clear form
      setEmail("");
      setPassword("");

      // 🔥 REDIRECT TO ANOTHER REACT APP (DASHBOARD)
      window.location.href = process.env.REACT_APP_DASHBOARD_URL;
      // (change this if dashboard is different port)
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data || "Login Failed");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mt-5">Login to Your Account</h1>

          <p className="text-center mb-4">
            Welcome back! Login to access your dashboard.
          </p>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
