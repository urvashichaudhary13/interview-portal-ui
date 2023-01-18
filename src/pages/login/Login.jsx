import React, { useState } from "react";
import { Header } from "../../components";
import "./login.css";

const Login = () => {

  const [state, setState] = useState("")

  const handleChange = (e) => {
    console.log("event:::::::::::;", e.target.value)
    setState(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log("INSIDEEEEEEEEEEEEEEE")
    console.log("--------------", state)
    e.preventDefault();

  }
  return (
    <>
      <Header />
      <section>
        <div className="login-box card">
          <form className="box-input">
          <label class="login-title"><h3><b>Login</b></h3></label>
          <br />
            <label>New User?</label>
            <a class="account" href="/signup">
              Create an account
            </a>
            <br />
            <br />
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              onChange={(e) => {handleChange(e)}}
            />
            <br />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              // onChange={(e) => handleChange(e)}
            />
            <br />
            <button type="submit" class="btn btn-primary login-button" onSubmit={e => {handleSubmit(e)}}>
              Login
            </button>
            <br />
            <a class="forgot" href="/">
              Forgot Password ?
            </a>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
