import { FiUser } from "react-icons/fi";
import React from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

export default function Forgot() {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadings, setIsLoadings] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      axios
        .patch(process.env.NEXT_PUBLIC_ENDPOINT_FORGOT, { email })
        .then((response) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Do you want to continue",
            width: 389,
            icon: "success",
          });
          router.push("/otp");
        })
        .catch(({ response }) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "We Sorry!",
            width: 389,
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoading(false);
          setIsLoadings(true);
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
          <h5>Forgot Password?</h5>
          <div>
            {" "}
            <small className="text-center text-forgot">
              We just need your registered e-mail addres to send your password
              reset
            </small>
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
              <div>
                <button
                  type="submit"
                  className="button-login"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Reset password"}
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
