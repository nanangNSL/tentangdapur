import { FiUser } from "react-icons/fi";

export default function Login() {
  return (
    <>
      <div className="container-login">
        <div className="bg-avatar">
          <FiUser className="icon" />
        </div>
        <div>
          <h5>Welcome !</h5>
          <div>
            {" "}
            <p>Log in to your exiting account.</p>
          </div>
        </div>
        <div className="row-login">
          <form className="form-login">
            <div>
              <input
                type="email"
                className="form-control"
                name="Email"
                aria-describedby="emailHelpId"
                placeholder="👤 examplexxx@gmail.com"
                required
              />
              <div className="password">
                <input
                  type="password"
                  className="form-control"
                  name="🔒 password"
                  placeholder="&#xe033; Password"
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
              Don’t have an account? <a href="/" >Sign Up</a>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}
