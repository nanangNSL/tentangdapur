import React from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from "react-redux";
import Axios from "axios";
import useSWR from "swr";
import Style from "../../styles/pages/Home.module.css";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar/index";
import Image from "next/image";

export default function Myrecipe() {
    const {
        query: { id },
      } = useRouter();
      
  const fetcher = async () => {
    const response = await Axios.get(`https://expressjs-firebase-nodemailer.herokuapp.com/search/mylike/${id}`);
    return response.data;
  };

  const { data } = useSWR("myLike", fetcher);
  if (!data)
    return (
      <div className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );


  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <div className="">
            <div>
              <div className="">
                <h5>My Recipe</h5>
              </div>
            </div>
            <div className=" d-flex justyfy-content-center align-items-center p-1 overflow-hidden">
              <div className=" overflow-hidden container-myrecipe">
                <div className="border d-flex flex-end  container-mobile shadow-sm  bg-body mt-2 rounded ">
                  <Link className=" class-img" href="/">
                    <a className="text-decoration-none ">
                      <div className="row row-cols-3 row-pop">
                        <div className="col-sm">
                          <Image
                            src="/food2.jpg"
                            width={100}
                            height={80}
                            alt="Images"
                            className=" image-class"
                          />
                        </div>
                        <div className="col-sm-4 ">
                          <div className="title-mobile">
                            <small>bakso</small>
                          </div>
                          <div className="footer-title">
                            <small>food, healty</small>
                          </div>
                          <div className="rating-mobile">
                            <AiFillStar />
                            <small>4.7</small>
                          </div>
                        </div>
                        <div className="col-sm  col-end">
                          <AiOutlineLike className="icon" />
                          <BsBookmark className="icon" />
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
}
