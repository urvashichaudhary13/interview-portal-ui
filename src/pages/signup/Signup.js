import React, { useState } from "react";
import { Header } from '../../components'
import './style.css'

export const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    let result = await fetch("http://localhost:3006/api/users", {
      method:"POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3006"
      }
    } )
    result = await result.json();
    return result;
  }

  return (
    <>
      <Header />
      <section>
        <div className="box card">
          <form className="box-input" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({firstname, lastname, email, password})}}>
            <label class="signup-heading"><h3><b>Sign Up</b></h3></label>
            <br />
            <br />
            <input class="form-control" value={firstname} placeholder="First name" onChange={(e) => setfirstname(e.target.value)} required />
            <br />
            <input class="form-control" value={lastname} placeholder="Last name" onChange={(e) => setlastname(e.target.value)} required />
            <br />
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              value={email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit" class="btn btn-primary login-button">
              Sign Up
            </button>
            <label >Already a member?</label>
            <a href="/login">Sign in</a>
          </form>
        </div>
      </section>
    </>
  )
}

export default Signup
