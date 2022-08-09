import { AiFillUnlock } from "react-icons/ai";
import React from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import Countdown from "react-countdown";
import { zeroPad } from "react-countdown";

export default function Forgot() {
  const router = useRouter();

  const [forgotPassword, setForgotPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadings, setIsLoadings] = React.useState(false);
  const [isTrue, setTrue] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState("");
  const [confPasswords, setConfPassword] = React.useState("");

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .patch(process.env.NEXT_PUBLIC_ENDPOINT_OTP, { forgotPassword })
        .then((response) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Do you want to continue",
            width: 389,
            icon: "success",
          });
          setTrue(true);
        })
        .catch(({ response }) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Code OTP not valid",
            width: 389,
            icon: "error",
          });
          setTrue(false);
        })

        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  const handleUpdate = () => {
    setIsLoadings(true);
    setTimeout(() => {
      axios
        .patch(`${process.env.NEXT_PUBLIC_ENDPOINT_UPDATE_PASS}/${forgotPassword}`, {
          password: newPassword,
          confPassword: confPasswords,
        })
        .then((response) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Password successfully updated",
            width: 389,
            icon: "success",
          });
          router.push("/login");
        })
        .catch(({ response }) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Check your password again",
            width: 389,
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoadings(false);
          setTrue(true);
        });
    }, 3000);
  };

  const Completionist = () => {
    Swal.fire({
      title: "waktu habis",
      text: "Do you want to continue",
      width: 389,
      icon: "info",
    });
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="span-couwn">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="bg-avatar">
          <AiFillUnlock className="icon" />
        </div>
        
        {isTrue ? (
          <div className="row-login">
            <form
              className="form-login"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="🔒 Password"
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="password">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="🔒 Password"
                    required
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="button-login"
                    disabled={isLoadings}
                  >
                    {isLoadings ? "Loading..." : "Update code"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div>
              <h5>Enter your code</h5>
              <div className="text-center con-down">
                <Countdown
                  date={Date.now() + 6 * (60 * 1000)}
                  renderer={renderer}
                />
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
                    type="number"
                    className="form-control"
                    name="number"
                    placeholder="Enter your code"
                    required
                    onChange={(e) => setForgotPassword(e.target.value)}
                  />
                  <div>
                    <button
                      type="submit"
                      className="button-login"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Confirm code"}
                    </button>
                  </div>{" "}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
