import { Card } from "react-bootstrap";
import { GiRibbonMedal } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/authenticate/type";

export default function Profile() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const router = useRouter();


  const handleUpdateProfile = () =>{
    router.push("/update")
  }

  React.useEffect(() => {
  const decodeUser = decode(auth.token);
    setName(decodeUser?.name);
    setImage(decodeUser?.image);
  }, [auth]);


  const handleLogout = async (e) =>{
    e.preventDefault();
    dispatch({
      type: Type.REMOVE_AUTH,
      payload: {
        token: null,
      },
    })
    router.push("/")
  
  }

  return (
    <>
      <div className=" bg-light ">
        <div className="bg-profile">
          <div className="container-image">
            <Card.Img
              src={image ? image : "/avatar.png"}
              width={100}
              height={100}
              alt="Images"
              className="mt-5 image-profile"
            />
          </div>
          <div className="container-image">
            <h3>{name ? name : "anonymous"}</h3>
          </div>
        </div>
        <div className="bg-col-profile ms-2 bg-light shadow">
          <div>
            <ul className="">
              <li>
                <button type="button" className="btn btn-link  btn-linkprofile" onClick={handleUpdateProfile}>
                  <FiUser className="icon" />
                  <span>Edit Profile</span>
                  <IoIosArrowForward className="icon-end" />{" "}
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-link  btn-linkprofile">
                  <GiRibbonMedal className="icon" />
                  <span>My Recipe</span>{" "}
                  <IoIosArrowForward className="icon-end" />{" "}
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-link  btn-linkprofile">
                  <BsBookmark className="icon" />
                  <span>Saved Recipe</span>{" "}
                  <IoIosArrowForward className="icon-end" />{" "}
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-link  btn-linkprofile">
                  <AiOutlineLike className="icon" />
                  <span>Like Recipe</span>
                  <IoIosArrowForward className="icon-end" />{" "}
                </button>
              </li>
              <div>
                 <li>
                <button type="button" className="btn btn-link  btn-linkprofile btn-logout" onClick={handleLogout}>
                  Log out
                </button>
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
