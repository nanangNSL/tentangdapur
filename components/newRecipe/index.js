import { Row, Card, Container } from "react-bootstrap";
import Banner from "../banner";
import Axios from "axios";
import React from "react";
import Link from "next/link"

export default function NewRecipe() {
  const [recipe, setRecipe] = React.useState("");

  React.useEffect(() => {
    handleData();
  },[]);

  const handleData = async (req, res) => {
    await Axios.get("http://localhost:7000/search?limit=4")
      .then((response) => {
        setRecipe(response.data.result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container fluid>
      <Banner />
      <Row className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll mt-2 ">
        {Array.from(recipe).map((data) => (
          <span key={data.id} className="span-image">
            <Link href={`detail/${data.id}`}>
              <a className="text-decoration-none">
                 <img src={data.image} alt="Images" className="images-card" />
              <h5 className="title-span">{data.title}</h5>
              </a>
             
            </Link>
          </span>
        ))}
      </Row>
    </Container>
  );
}
