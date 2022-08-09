import Style from "../../styles/pages/Home.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useRouter } from "next/router";
import React from "react";
import Axios from "axios";
import { FiPlay } from "react-icons/fi";
import { IoArrowBack} from "react-icons/io5";

export default function Details() {
  const {
    query: { id },
  } = useRouter();
  const [title, setTitle] = React.useState();
  const [image, setImage] = React.useState();
  const [inggredients, setIngredient] = React.useState();
  const [change, setChange] = React.useState(false);

  const handleClickVideo = (e) => {
    e.preventDefault();
    setChange(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setChange(false);
  };

  const handleData = async () => {
    const data = await Axios.get(`http://localhost:7000/post/${id}`);
    setTitle(data.data.title);
    setImage(data.data.image);
    setIngredient(data.data.inggredients);
  };
  React.useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <div className=" bg-light border border-1 overflow-hidden">
            <img
              src={image}
              width="400"
              height="300"
              alt="food2"
              className="image-bg-recipe"
            />
            <a href="/" className="arrow-back">
              <IoArrowBack/>
            </a>
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
                <button type="buttons" className="btn-det-1">
                  <BsBookmark className="icons" />
                </button>
                <button type="button" className="btn-det-1">
                  <AiOutlineLike className="icons" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-image-recipe shadow border">
            <div className="container-inggredients">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className="btn-det"
                      aria-current="true"
                      href="#"
                      onClick={handleClick}
                    >
                      Inggredients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="btn-det" href="#" onClick={handleClickVideo}>
                      Video
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body-det">
                {change ? (
                  <>
                    {" "}
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
                  </>
                ) : (
                  <span>{inggredients}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
