import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        <h1>Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formValue.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
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
        <label htmlFor="confirmPassword">Confirm Password </label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formValue.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button>Sign Up</button>
        <p>
          Already registered? Click <Link to="/login">here</Link>
        </p>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  );
}

export default Register;
