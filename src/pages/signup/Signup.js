import { Header } from '../../components'
import './style.css'

export const Signup = () => {
  return (
    <>
      <Header />
      <section>
        <div className="box card">
          <form className="box-input">
            <label class="signup-heading"><h3><b>Sign Up</b></h3></label>
            <br />
            <br />
            <input class="form-control" placeholder="First name" required />
            <br />
            <input class="form-control" placeholder="Last name" required />
            <br />
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <br />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
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
