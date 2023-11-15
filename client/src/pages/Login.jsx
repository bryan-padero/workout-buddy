import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  //   const [error, setError] = useState(null);

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    console.log(e);
  }

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <label htmlFor="email">Email Address </label>
        <input
          id="email"
          type="text"
          name="email"
          value={formValue.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formValue.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button>Sign In</button>
        <p>
          Not yet registered? Click <Link to="/register">here</Link>
        </p>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  );
}

export default Login;
