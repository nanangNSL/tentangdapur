import { FiUser } from "react-icons/fi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as Type from "../../redux/authenticate/type";
import React from "react";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);


 

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post(process.env.NEXT_PUBLIC_ENDPOINT_LOGIN, { email, password })
        .then((response) => {
          dispatch({
            type: Type.SET_AUTH,
            payload: {
              token: response.data.accessToken,
            },
          })
          Swal.fire({
            title: 'Login successful',
            width: 389,
            text: "yeah ",
            icon: "success",
          });
          router.replace("/");
        })
        .catch(({ response }) => {
          const falseResponse = response.data.message;
          Swal.fire({
            title: falseResponse,
            width: 389,
            text: "There is an error username and password do not match",
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

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
          <form
            className="form-login"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <input
                type="email"
                className="form-control"
                name="Email"
                aria-describedby="emailHelpId"
                placeholder="👤 examplexxx@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="🔒 Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="con-forgot">
                <a href="/forgot" className="forgot-btn  text-decoration-none">
                  forgot password
                </a>
              </div>
              <div>
                <button type="submit" className="button-login"
                disabled={isLoading}>
                 {isLoading ? "Loading..." : "Log in"}
                </button>
              </div>{" "}
            </div>
            <small className="text-center d-flex justify-content-center mt-2">
              Don’t have an account? <Link href="/register" className="text-sign">Sign Up</Link>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}
