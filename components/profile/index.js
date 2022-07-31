import { Card } from "react-bootstrap";
import { GiRibbonMedal } from "react-icons/gi"
import { FiUser } from "react-icons/fi"; 
import { AiOutlineLike } from "react-icons/ai"; 
import { BsBookmark } from "react-icons/bs"; 
import { IoIosArrowForward } from "react-icons/io"; 

export default function Profile() {
    return (
        <>
      <div className=" bg-light ">
        <div className="bg-profile">
            <div className="container-image">
            <Card.Img
              src="/avatar.png"
              width={100}
              height={100}
              alt="Images"
              className="mt-2 image-profile"
            />
            </div>
            <div className="container-image">
                <h3>Nanang</h3>
            </div>
        </div>
        <div className="bg-col-profile ms-2 bg-light shadow">
            <div>
                <ul className="">
                <li><button type="button" className="btn btn-link  btn-linkprofile"><FiUser className="icon"/><span>Edit Profile</span><IoIosArrowForward className="icon-end"/> </button></li>
                <li><button type="button" className="btn btn-link  btn-linkprofile"><GiRibbonMedal  className="icon"/><span>My Recipe</span> <IoIosArrowForward  className="icon-end"/> </button></li>
            <li><button type="button" className="btn btn-link  btn-linkprofile"><BsBookmark  className="icon"/><span>Saved Recipe</span> <IoIosArrowForward  className="icon-end"/> </button></li>
                <li><button type="button" className="btn btn-link  btn-linkprofile"><AiOutlineLike  className="icon"/><span>Like Recipe</span><IoIosArrowForward  className="icon-end"/> </button></li>
            </ul>
            </div>
            
        </div>
      </div>
    </>
    );
}