import Style from "../../styles/pages/Home.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useRouter } from "next/router";
import React from "react";
import Axios from "axios";
import { FiPlay } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import axios from "axios";
import * as Type from "../../redux/like/type";
import * as Tipe from "../../redux/save/type";
import { useDispatch } from "react-redux";
import FormData from "form-data";
import Image from "next/image"
import Link from "next/link";


export default function Details() {
  const {
    query: { id },
  } = useRouter();
  React.useEffect(() => {
    handleData();
    handleUser();
    handleValidasi();
  });
  const dispatch = useDispatch();
  const { auth, like, save } = useSelector((state) => state);
  const [title, setTitle] = React.useState();
  const [image, setImage] = React.useState();
  const [inggredients, setIngredient] = React.useState();
  const [change, setChange] = React.useState(false);
  const [likes, setLike] = React.useState(false);
  const [userLike, setUserLike] = React.useState();
  const [user, setUser] = React.useState();
  const [idRecipe, setIdRecipe] = React.useState("");
  const [idLike, setIdLike] = React.useState("");
  const [saved, setSave] = React.useState();

  const handleUser = () => {
    const decodeUser = decode(auth?.token);
    setUser(decodeUser?.userId);
  };

  const handleClickVideo = (e) => {
    e.preventDefault();
    setChange(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setChange(false);
  };
  const handleLike = async (req, res) => {
    if (userLike === user) {
    } else {
      await axios
        .post("https://expressjs-firebase-nodemailer.herokuapp.com/search/like", {
          userId: user,
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
    await axios
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

  const handleValidasi = async () => {
    setLike(like?.like?.like);
    setSave(save?.save?.save);
  };
  const handleSave = async (req, res) => {
    await axios
      .post(`https://expressjs-firebase-nodemailer.herokuapp.com/search/save`, {
        userId: user,
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
    await axios
      .post(`https://expressjs-firebase-nodemailer.herokuapp.com/search/save/${idRecipe}`)
      .then(() => {
        dispatch({
          type: Tipe.SET_SAVE,
          payload: {
            save: false,
          },
        });
      })
      .catch((err) => {
      });
  };

  const handleData = async () => {
    const data = await Axios.get(`https://expressjs-firebase-nodemailer.herokuapp.com/post/${id}`);
    setTitle(data.data.title);
    setImage(data.data.image);
    setIngredient(data.data.inggredients);
    setUserLike(data?.data?.likes[0]?.userId);
    setIdLike(data.data.likes[0]?.id);
    setIdRecipe(data.data.id);
  };
 
  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <div className=" bg-light border border-1 overflow-hidden">
            <Image
              src={image}
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
                  <h3>{title}</h3>
                  <small className="fw-semibold text-det">
                    by Tentang Dapur
                  </small>
                </div>
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm col-det">
                {saved ? (
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

                {likes ? (
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
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <Link
                      className="btn-det"
                      aria-current="true"
                      href="#"
                      onClick={handleClick}
                    >
                      Inggredients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn-det" href="#" onClick={handleClickVideo}>
                      Video
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="card-body-det">
                {change ? (
                  <>
                    <div className="mb-3">
                      <div className="row row-cols-3 con-det shadow-sm">
                        <div className="col col-btn">
                          <FiPlay />
                        </div>
                        <div className="col col-right">
                          <h6 className="title-video">Step 1</h6>
                          <small className="footer-video">
                            Boil eggs for 3 minutes
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="row row-cols-3 con-det shadow-sm">
                        <div className="file">
                          <input
                            type="file"
                            id="file"
                            className="input-file"
                            name="file"
                            placeholder="Input file"
                            hidden
                            required
                          />
                          <label htmlFor="file" className="button-video">
                            {" "}
                            <FaCloudUploadAlt/> Upload
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                   <span>{inggredients}</span>
                  <div>
                    <form className="form-comment">
                      <input type="text" placeholder="input comment"/>
                      <input
                    className="input-group-text "
                    id="basic-addon2"
                    hidden
                    type="submit"
                  />
                    </form>
                  </div>
                  </>
                 
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
