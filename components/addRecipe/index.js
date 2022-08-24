import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import FormData from "form-data";
import { IoMdCloudUpload } from "react-icons/io";

export default function Recipe() {
  const router = useRouter();

  const [title, setTitle] = React.useState("");
  const [inggredients, setInggredients] = React.useState("");
  const [image, setImage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [ imagePreview,  setImagePreview] = React.useState(null);


  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImage(uploaded)
    setImagePreview(URL?.createObjectURL(uploaded));
}

  const handleUpload = () => {
    const data = new FormData();
    data.append('title', title)
    data.append('inggredients', inggredients)
    data.append('image', image)

    setIsLoading(true);
    setTimeout(() => {
      axios
        .post(process.env.NEXT_PUBLIC_ENDPOINT_UPLOAD_RECIPE, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then((response) => {
          Swal.fire({
            title: 'Recipe data received',
            text: "Check the latest recipe",
            width: 389,
            icon: "success",
          });
          router.push("/");
        })
        .catch((response) => {
          const trueResponse = response.data.message;
          Swal.fire({
            title: trueResponse,
            text: "Check the latest recipe",
            width: 389,
            icon: "success",
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
        <button
          className="btn btn-light  position-absolute top-0 start-0 mt-4 ms-4"
          onClick={() => router.replace("/")}
        >
          <IoChevronBack />
        </button>
        <div>
          <h5>Add Your Recipe</h5>
        </div>
        <div className="row-login">


          <form
            className="form-login"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpload();
            }}
          >
            <div>
              <input
                type="text"
                className="form-control"
                name="text"
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
                className="mt-2"
                onChange={(e) => setInggredients(e.target.value)}
              >
                Enter text
              </textarea>
              <div className="priview">
              <p for="image">Preview : </p>
              <img src={imagePreview ? imagePreview: "/placeholder.png"} width="50%" height="20%" alt="images" id="image"/>
              </div>
              <div className="file">
                <input
                  type="file"
                  id="file"
                  className="input-file"
                  name="file"
                  placeholder="Input file"
                  hidden
                  required
                  onChange={handleUploadChange}
                />
                <label for="file" className="button-label" ><IoMdCloudUpload/> Upload</label>
              </div>{" "}
              <div>
                <button
                  type="submit"
                  className="button-login"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "POST"}
                </button>
              </div>{" "}
            </div>
          </form>


        </div>
      </div>
    </>
  );
}
