import { Row, Card, Container } from "react-bootstrap";
import Category from "../banner/category";
import NewRecipe from "../banner/newRecipe";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import Axios from "axios";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export default function Popular() {
  const [recipe, setRecipe] = React.useState("");

  React.useEffect(() => {
    handleData();
  }, []);

  const handleData = async (req, res) => {
    await Axios.get("http://localhost:7000/search?limit=7")
      .then((response) => {
        setRecipe(response.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Category />
      <Row className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll">
        {Array.from(recipe).map((data) => (
          <Card
            key={data.id}
            style={{ width: "7rem" }}
            className="card-mini bg-warning"
          >
            <Link href={`detail/${data.id}`}>
              <a className="text-decoration-none">
                <Card.Img
                  src={data.image}
                  width={80}
                  height={70}
                  alt="Images"
                  className="mt-2 image-mini"
                />
                <Card.Title
                  style={{ fontSize: "13px" }}
                  className="text-center title-mini"
                >
                  {data.title}
                </Card.Title>
              </a>
            </Link>
          </Card>
        ))}
      </Row>
      <NewRecipe />
      {Array.from(recipe).map((data) => (
                <div
                  key={data.id}
                  className="d-flex flex-end  container-mobile shadow-sm  bg-body mt-2 rounded "
                >
                  <Link className=" class-img "  href={`detail/${data.id}`}>
                    <a className="text-decoration-none ">
                      <div className="row row-cols-3 row-pop">
                        <div className="col-sm">
                          <img
                            src={data.image}
                            width={100}
                            height={90}
                            alt="Images"
                            className=" image-class"
                          />
                        </div>
                        <div className="col-sm-4 ">
                          <div className="title-mobile">
                            <small>{data.title}</small>
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
                            <AiOutlineLike className="icon"/>
                            <BsBookmark  className="icon" />
                        </div>
                      
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
    </Container>
  );
}
