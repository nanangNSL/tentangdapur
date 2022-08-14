import { Row, Card, Container } from "react-bootstrap";
import Banner from "../banner";
import Axios from "axios";
import React from "react";
import Link from "next/link";

export default function NewRecipe() {
  const [recipe, setRecipe] = React.useState("");
  const [isloading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleData();
  }, []);

  const handleData = (req, res) => {
    setLoading(true);
    setTimeout(() => {
      Axios.get("http://localhost:7000/search?limit=4")
        .then((response) => {
          setRecipe(response.data.result);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }, 4000);
  };
  return (
    <Container fluid>
      <Banner />
      {isloading ? (
        <Row className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll mt-2 p-2">
          {[...new Array(6)].map((item, key) => (
             <span key={key} className="placeholder-glow span-placeholder" >
              <img src="/placeholder.png" alt="Images" className="images-card placeholder shadow-sm" />
              <h5 className="title-placeholder"><span className="placeholder col-4 rounded"></span></h5>
          </span>
          ))}
        </Row>
      ) : (
        <Row className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll mt-2  p-2">
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
      )}
    </Container>
  );
}
