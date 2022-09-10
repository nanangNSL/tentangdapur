import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("");

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post(process.env.NEXT_PUBLIC_ENDPOINT_REGISTER, {
          name: name,
          email: email,
          phoneNumber: number,
          password: password,
          confPassword: confPassword,
        })
        .then((response) => {
          const falseResponse = response.data.message;
          Swal.fire({
            title: falseResponse,
            width: 389,
            text: `Nice to meet you ${name}`,
            icon: "success",
          });
          router.replace("/login");
        })
        .catch(() => {
          Swal.fire({
            title: "Sorry",
            width: 389,
            text: "Check the password and email again",
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
        <div>
          <h5>Welcome !</h5>
        </div>
        <div className="row-login">
          <form
            className="form-register"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <input
                type="text"
                className="form-reg"
                name="Name"
                placeholder="@ Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="form-reg"
                name="Email"
                aria-describedby="emailHelpId"
                placeholder="📧 Examplexxx@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="Number"
                className="form-reg"
                name="Number"
                aria-describedby="emailHelpId"
                placeholder="☎ Phone number"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="password"
                className="form-reg"
                name="password"
                placeholder="🔒 Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="password">
                <input
                  type="password"
                  className="form-reg"
                  name="password"
                  placeholder="🔒 Confirm password"
                  required
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="button-login mt-5"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Register"}
                </button>
              </div>{" "}
            </div>
            <small className="text-center d-flex justify-content-center mt-2 footer-text">
            Do you have an account ?<Link href="/login" className="text-sign">Login</Link>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}
