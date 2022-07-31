import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export default function DetailRecipe() {
  return (
    <>
      <div className=" bg-light">
        <Image
          src="/food2.jpg"
          width="450"
          height="320"
          alt="food2"
          className="image-bg-recipe"
        />
        <div className="detail-image">
          <div className="">
            <h3>Burger bangor</h3>
            <small>by Deni sumargo</small>
          </div>
          <div className="bg-icons">
            <button type="button">
              <BsBookmark className="icons" />
            </button>
            <button type="button">
              {" "}
              <AiOutlineLike className="icons" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-image-recipe shadow">
      </div>
    </>
  );
}
