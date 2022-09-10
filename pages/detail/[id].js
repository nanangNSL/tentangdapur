import Style from "../../styles/pages/Home.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/router";
import React from "react";
import Axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import * as Type from "../../redux/like/type";
import * as Tipe from "../../redux/save/type";
import { useDispatch } from "react-redux";
import FormData from "form-data";
import Image from "next/image";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


export async function getStaticPaths() {
  const res = await fetch('https://expressjs-firebase-nodemailer.herokuapp.com/search/home')
  const dataRecipe = await res.json()

  const paths = dataRecipe.map((data) => ({
    params: { id: data.id.toString() },
  }))

  return { paths, fallback: true }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`https://expressjs-firebase-nodemailer.herokuapp.com/post/${params.id}`)
  const dataRecipe = await res.json()

  return { props: { dataRecipe } }
}



export default function Details(context) {
  const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  const listComment = context?.dataRecipe?.comments;
 
  const dispatch = useDispatch();
  const { auth, like, save } = useSelector((state) => state);
  let userID;
  if (auth?.token) {
    const decodeToken = decode(auth?.token);
    userID = decodeToken.userId;
  } else {
    const decodeToken = decode(auth?.token);
    userID = decodeToken?.userId;
  }
  console.log(userID);



  const handleLike = async () => {
    if (userLike === userID) {
    } else {
      await Axios
        .post("https://expressjs-firebase-nodemailer.herokuapp.com/search/like", {
          userId: userID,
          recipeId: idRecipe,
          like: "1",
        })
        .then((res) => {
          dispatch({
            type: Type.SET_LIKE,
            payload: {
              like: true,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleUnlike = async (req, res) => {
    await Axios
      .post(`https://expressjs-firebase-nodemailer.herokuapp.com/search/unlike/${idLike}`)
      .then((res) => {
        dispatch({
          type: Type.SET_LIKE,
          payload: {
            like: false,
          },
        });
      })
      .catch((err) => Console.log(err));
  };


  const handleSave = async () => {
    await Axios
      .post(`https://expressjs-firebase-nodemailer.herokuapp.com/search/save`, {
        userId: userID,
        recipeId: idRecipe,
      })
      .then((res) => {
        dispatch({
          type: Tipe.SET_SAVE,
          payload: {
            save: true,
          },
        });
      })
      .catch((err) => {
        setSave(false);
      });
  };
  const handleUnsave = async (req, res) => {
    await Axios
      .post(`https://expressjs-firebase-nodemailer.herokuapp.com/search/save/${idRecipe}`)
      .then(() => {
        dispatch({
          type: Tipe.SET_SAVE,
          payload: {
            save: false,
          },
        });
      })
      .catch((err) => {});
  };
 


  const [show, setShow] = React.useState(false);
  const ClickShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const ClickClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const [fileVideo, setFileVideo] = React.useState("");
  const [progres, setProgres] = React.useState(false);
  const handleFileVideo = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileVideo(file);
  };

  const uploadVideo = async (e) => {
    e.preventDefault();
    if(!userID){
      Swal.fire("Please login", "Before posting a video, please login first.", "info");
    }else{
     setProgres(true);
    const formData = new FormData();
    formData.append("userId", userID);
    formData.append("recipeId", id);
    formData.append("video", fileVideo);
    await Axios
      .post(`https://expressjs-firebase-nodemailer.herokuapp.com/search/video`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        Swal.fire("Upload!", "Your recipe has been uploaded.", "success");
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire(
          "Cannot upload",
          "The image size cannot be larger than 1 mb and the only extension allowed is .jpg | .jpeg | .png",
          "error"
        );
      })
      .finally(() => {
        setProgres(false);
      }); 
    }
    
  };

  const [valueComment, setValueComment] = React.useState("");
  const [spiner, setSpiner] = React.useState(false);

  const postComment = (e) => {
    e.preventDefault();
   
    if(!userID){
      Swal.fire("Please login", "Before posting a comment, please login first.", "info");
    }else{
      setSpiner(true);
         setTimeout(() => {
      Axios
        .post("https://expressjs-firebase-nodemailer.herokuapp.com/search/comment", {
          userId: userID,
          recipeId: id,
          comment: valueComment,
        })
        .then((res) => {
          console.log("res", res);
          Swal.fire("Upload!", "Your recipe has been uploaded.", "success");
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire(
            "Cannot upload",
            "The image size cannot be larger than 1 mb and the only extension allowed is .jpg | .jpeg | .png",
            "error"
          );
        })
        .finally(() => {
          setSpiner(false);
        });
    }, 3000); 
    }

  };

  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <button
            className="btn btn-light  position-absolute top-0 start-0 mt-4 ms-4"
            onClick={() => router.replace("/")}
          >
            <IoChevronBack />
          </button>
          <div className=" bg-light border border-1 overflow-hidden">
            <Image
              src={context?.dataRecipe?.image}
              width="400"
              height="300"
              alt="food2"
              className="image-bg-recipe"
            />
            <Link href="/" className="arrow-back">
              <IoArrowBack />
            </Link>
            <div className="row row-cols-3 row-pop-detail">
              <div className="col-sm ">
                <div className="title-det">
                  <h3>{context?.dataRecipe?.title}</h3>
                  <small className="fw-semibold text-det">
                    by Tentang Dapur
                  </small>
                </div>
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm col-det">
                {context?.dataRecipe?.save ? (
                  <button
                    onClick={handleUnsave}
                    type="buttons"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                    className="btn-det-2"
                  >
                    <BsBookmark className="icons" />
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    type="buttons"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                    className="btn-det-1"
                  >
                    <BsBookmark className="icons" />
                  </button>
                )}

                {context?.dataRecipe?.likes ? (
                  <button
                    onClick={handleUnlike}
                    type="button"
                    className="btn-det-2"
                  >
                    <AiOutlineLike className="icons" />
                  </button>
                ) : (
                  <button
                    onClick={handleLike}
                    type="button"
                    className="btn-det-1"
                  >
                    <AiOutlineLike className="icons" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="bg-image-recipe shadow border">
            <div className="container-inggredients">
              <Card className="container-card">
                <Card.Header className="card-detail">
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first" onClick={ClickClose} className="link-i">
                        Ingredients
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link" onClick={ClickShow}  className="link-i">
                        Video
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className={show ? "d-none" : "d-block"}>
                  <Card.Text>
                    <pre>{context?.dataRecipe?.inggredients}</pre>
                  </Card.Text>
                </Card.Body>
                <Card.Body className={show ? "d-block div-video" : "d-none"}>
                  <div className="mb-3">
                    {context?.dataRecipe?.videos ? (
                      <>
                        {context?.dataRecipe?.videos.map((item) => (
                          <>
                            <video
                              key={item.id}
                              width="320"
                              height="200"
                              controls
                            >
                              <source src={item.video} type="video/mp4 " />
                            </video>
                          </>
                        ))}{" "}
                      </>
                    ) : (
                      <div>
                        <Image
                          src="/video404.png"
                          alt="video"
                          width={320}
                          height={200}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="row row-cols-3  shadow-sm">
                      <div className="file">
                        <form className="form-video" onSubmit={uploadVideo}>
                          <input
                            type="file"
                            id="file"
                            name="file"
                            placeholder="Input file"
                            accept=".mp4,.3gpp,.x-msvideo"
                            hidden
                            onChange={handleFileVideo}
                            required
                          />
                          <label htmlFor="file" className="label-video me-2">
                            {progres ? (
                              <div
                                className="spinner-border text-warning"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              "Upload video"
                            )}
                          </label>
                          <button
                            type="submit"
                            className="btn btn-warning btn-video"
                          >
                            <FaCloudUploadAlt />
                          </button>
                        </form>
                        <div>
                          <form onSubmit={postComment}>
                            <FloatingLabel
                              controlId="floatingTextarea2"
                              label="Comments"
                              className="mt-3"
                            >
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "100px", width: "320px" }}
                                value={valueComment}
                                onChange={(e) =>
                                  setValueComment(e.target.value)
                                }
                              />
                            </FloatingLabel>
                            <div className="div-post">
                              <button type="submit" className="btn-post">
                                {spiner? <div
                                className="spinner-border text-warning"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div> : 'Post'}
                              </button>
                            </div>
                          </form>
                          <div className="mt-2">
                            <p>Comment :</p>
                          </div>

                          <div className="container-row  text-center mt-3 p-1">
                            {listComment?.map((item) => (
                              <div key={item.id} className="row row-cols-2 p-2">
                                <div className="col-sm-1 p-1 div-img">
                                  <Image
                                    src="/avatar.png"
                                    alt="Avatar"
                                    width={100}
                                    height={100}
                                    className="avatar-post"
                                  />
                                </div>
                                <div className="col-sm-10 ">
                                  <div className="row row-cols-1  text-start mt-1">
                                    <div className="col  fw-semibold">Nama</div>
                                    <small className="col  .fs6">
                                      {item.comment}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3">
                            <span>
                              <br />
                            </span>
                            <span>
                              <br />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

