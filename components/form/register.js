import { FiUser } from "react-icons/fi";

export default function Register() {
  return (
    <>
      <div className="container-login">
        <div>
          <h5>Welcome !</h5>
        </div>
        <div className="row-login">
          <form className="form-login">
            <div>
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="@ Name"
                required
              />
              <input
                type="email"
                className="form-control"
                name="Email"
                aria-describedby="emailHelpId"
                placeholder="👤 examplexxx@gmail.com"
                required
              />
              <input
                type="Number"
                className="form-control"
                name="Number"
                aria-describedby="emailHelpId"
                placeholder="☎ Phone number"
                required
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="🔒 password"
                required
              />
              <div className="password">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="🔒 Confirm password"
                  required
                />
              </div>
              <small className="text-mini">Forgot Password ?</small>
              <div>
                <button type="submit" className="button-login">
                  LOGIN
                </button>
              </div>{" "}
            </div>
            <small className="text-center d-flex justify-content-center mt-2">
              Don’t have an account? <a href="/">Sign Up</a>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}
