import React from "react";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import Axios from "axios";
import FormData from "form-data";
import Swal from "sweetalert2";
import { IoMdCloudUpload } from "react-icons/io";
import Image from "next/image"

export default function Edit() {
  const [image, setImage] = React.useState();
  const [imagePreview, setImagePreview] = React.useState();
  const [change, setChange] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadings, setIsLoadings] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState("");
  const [confPasswords, setConfPassword] = React.useState("");
  const [id, setId] = React.useState("");
  const { auth } = useSelector((state) => state);

  React.useEffect(() => {
    const decodeUser = decode(auth?.token);
    setId(decodeUser?.userId);
  },[auth.token]);

  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImage(uploaded);
    setImagePreview(URL.createObjectURL(uploaded));
  };

  const handleData = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      const data = new FormData();
      data.append("image", image);
      Axios.patch(`https://expressjs-firebase-nodemailer.herokuapp.com/users/image/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Password successfully updated",
            width: 389,
            icon: "success",
          });
        })
        .catch((response) => {
          console.log(response);
          const trueResponse = response.data;
          Swal.fire({
            title: trueResponse,
            text: "An error occurred uploading image",
            width: 389,
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  //

  const handleUpdate = () => {
    setIsLoadings(true);
    setTimeout(() => {
      Axios.patch(`https://expressjs-firebase-nodemailer.herokuapp.com/users/${id}`, {
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
        });
    }, 3000);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setChange(true);
  };
  const handleClickPass = (e) => {
    e.preventDefault();
    setChange(false);
  };

  return (
    <>
      <div className="container-update">
        <div className="title-edit">
          <h5>Edit Profile</h5>
        </div>
        <div className="con-actions">
          {change ? (
            <form
              className="form-profile"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <div>
                <input
                  type="password"
                  className="input-update"
                  name="password"
                  placeholder="🔒 New Password"
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="New Password">
                  <input
                    type="password"
                    className="input-update"
                    name="password"
                    placeholder="🔒 Confirm New Password"
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
                    {isLoadings ? "Loading..." : "Update Password"}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="mt-5 d-flex flex-column">
              <Image
                src={imagePreview ? imagePreview : "/avatar.png"}
                alt="image avatar"
                width={150}
                height={190}
                className="image-update"
              />
              <form onSubmit={handleData}>
                <input
                id="file"
                  type="file"
                  className="inputfile"
                  required
                  hidden
                  onChange={handleUploadChange}
                />
                <div className="row con-mix">
                  <label htmlFor="file" className="label-up col-sm-3 ">
                    <IoMdCloudUpload />
                  </label>
                  <button
                    type="submit"
                    className="col ms-2 btn-loading"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Upload"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a
              className="btn-det"
              aria-current="true"
              href="#"
              onClick={handleClick}
            >
              Change Password
            </a>
          </li>
          <li className="nav-item">
            <a className="btn-det" href="#" onClick={handleClickPass}>
              Change Profile Picture
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
