import { useState } from "react";
import axios from "axios";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("api/users/signup", {
        email,
        password,
      });
    } catch (err) {
      setErrors(err.response.data.errors);
    }

    console.log(response.data);
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="form-control"
        />
      </div>
      <div className="alert alert-danger">
        <h4>Ops....</h4>
        <ul className="my-0">{errors.map((err) => err.message)}</ul>
      </div>

      <button className="btn btn-primary">Sign up</button>
    </form>
  );
};
