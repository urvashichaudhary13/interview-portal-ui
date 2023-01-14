import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../../component/Header";
import './style.css'
import { Signup } from "../Signup/signup";

const Login = () => {
    return(
        <>
        <Header />
        <section>
            <div className="box card">
                <form className="box-input">
                <label>New User?</label>
                <a class="account" href="/signup" onClick={Signup}>Create an account</a>
                <br />
                <br />
                <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                <br />
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                <br />
                <button type="submit" class="btn btn-primary login-button">Login</button>
                <br />
                <a class="forgot" href="/">Forgot Password ?</a>
                </form>
            </div>
        </section>
        </>
        )
}

export default Login;
