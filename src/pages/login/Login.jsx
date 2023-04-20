import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import "./login.css";

const Login = () => {
  const [state, setState] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    let result = await fetch("http://localhost:3006/api/users/login", {
      method:"POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3006"
      }
    })
    result = await result.json();
    if(result.error) return
    navigate("/home")
  }
  const handleChange = (selected, type) => {
    if(type === "email") {
      setState({
        ...state,
        email: selected,
      })
    } else {
      setState({
        ...state,
        password:selected
      })
    }
  }
  return (
    <>
      <Header />
      <section>
        <div className="login-box card">
          <form className="box-input" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(state)}
          }>
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
              onChange={(e) => handleChange(e.target.value, "email")}
            />
            <br />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              onChange={(e) => handleChange(e.target.value, "password")}
            />
            <br />
            <button type="submit" class="btn btn-primary login-button">
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
