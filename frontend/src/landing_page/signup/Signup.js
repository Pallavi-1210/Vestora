import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        name,
        email,
        password,
      });

      alert(res.data);

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("Sigup failed.");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mt-5">Open a Vestora Account</h1>

          <p className="text-center mb-4">
            Track, manage, and analyze your investment portfolio with ease.
          </p>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={handleSignup}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
