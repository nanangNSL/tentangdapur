import { Row, Card, Container } from "react-bootstrap";
import Category from "../banner/category";
import NewRecipe from "../banner/newRecipe";
import { AiFillStar } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

export default function Popular() {
  return (
    <Container fluid>
      {/* bar category */}
      <Category />
      <Container className="fluid">
        <Row className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll">
          <Card style={{ width: "7rem" }} className="card-mini">
            <Card.Img
              src="/burger.png"
              width={80}
              height={70}
              alt="Images"
              className="mt-2 image-mini"
            />
            <Card.Title style={{ fontSize: "10px" }} className="text-center">
              Burger
            </Card.Title>
          </Card>
          <Card style={{ width: "7rem" }} className="card-mini">
            <Card.Img
              src="/pot.png"
              width={80}
              height={70}
              alt="Images"
              className="mt-2 image-mini"
            />
            <Card.Title style={{ fontSize: "10px" }} className="text-center">
              Soup
            </Card.Title>
          </Card>
          <Card style={{ width: "7rem" }} className="card-mini">
            <Card.Img
              src="/kopi.png"
              width={80}
              height={70}
              alt="Images"
              className="mt-2 image-mini"
            />
            <Card.Title style={{ fontSize: "10px" }} className="text-center">
              Coffee
            </Card.Title>
          </Card>
          <Card style={{ width: "7rem" }} className="card-mini">
            <Card.Img
              src="/soup.png"
              width={80}
              height={70}
              alt="Images"
              className="mt-2 image-mini"
            />
            <Card.Title style={{ fontSize: "10px" }} className="text-center">
              Cream
            </Card.Title>
          </Card>
          <Card style={{ width: "7rem" }} className="card-mini">
            <Card.Img
              src="/susi.png"
              width={80}
              height={70}
              alt="Images"
              className="mt-2 image-mini"
            />
            <Card.Title style={{ fontSize: "10px" }} className="text-center">
              Susi
            </Card.Title>
          </Card>
          <Card style={{ width: "7rem" }} className="card-mini">
            <Card.Img
              src="/steak.png"
              width={80}
              height={70}
              alt="Images"
              className="mt-2 image-mini"
            />
            <Card.Title style={{ fontSize: "10px" }} className="text-center">
              Steak
            </Card.Title>
          </Card>
        </Row>
      </Container>
      <NewRecipe />
      {/* search */}
      <nav className="sticky-top position-fixed top-0 start-50 translate-middle navbar-mobile">
        <div className="d-flex flex-row justify-content-center bg-light h-50 ">
          <nav className="navbar bg-light">
            <div className="container-fluid d-flex justify-content-center">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Pasta, Bread, etc"
                  aria-label="Search"
                />
                <button className="btn btn-light position-absolute end-0" type="submit">
                  <BiSearchAlt/>
                </button>
              </form>
            </div>
          </nav>
        </div>
      </nav>
      {/* grid recipe */}
      <section className=" mt-5 mb-5 d-flex flex-column">
        <div className="d-flex flex-end  container-mobile shadow mb-2 bg-body rounded bg-primary">
          <div className="col-5">
            <Card style={{ width: "7rem" }} className="card-mini">
              <Card.Img
                src="/steak.png"
                width={80}
                height={90}
                alt="Images"
                className="mt-2 image-mini"
              />
            </Card>
          </div>
          <div className="ms-3">
            <div className="title-mobile">
              <small>Burger california</small>
            </div>
            <div className="footer-title">
              <small>food, healty</small>
            </div>
            <div className="rating-mobile">
              <AiFillStar />
              <small>4.7</small>
            </div>
          </div>
        </div>
        <div className="d-flex flex-end  container-mobile shadow mb-2 bg-body rounded bg-primary">
          <div className="col-5">
            <Card style={{ width: "7rem" }} className="card-mini">
              <Card.Img
                src="/steak.png"
                width={80}
                height={90}
                alt="Images"
                className="mt-2 image-mini"
              />
            </Card>
          </div>
          <div className="ms-3">
            <div className="title-mobile">
              <small>Burger california</small>
            </div>
            <div className="footer-title">
              <small>food, healty</small>
            </div>
            <div className="rating-mobile">
              <AiFillStar />
              <small>4.7</small>
            </div>
          </div>
        </div>
        <div className="d-flex flex-end  container-mobile shadow mb-2 bg-body rounded bg-primary">
          <div className="col-5">
            <Card style={{ width: "7rem" }} className="card-mini">
              <Card.Img
                src="/susi.png"
                width={80}
                height={90}
                alt="Images"
                className="mt-2 image-mini"
              />
            </Card>
          </div>
          <div className="ms-3">
            <div className="title-mobile">
              <small>Burger california</small>
            </div>
            <div className="footer-title">
              <small>food, healty</small>
            </div>
            <div className="rating-mobile">
              <AiFillStar />
              <small>4.7</small>
            </div>
          </div>
        </div>
        <div className="d-flex flex-end  container-mobile shadow mb-2 bg-body rounded bg-primary">
          <div className="col-5">
            <Card style={{ width: "7rem" }} className="card-mini">
              <Card.Img
                src="/kopi.png"
                width={80}
                height={90}
                alt="Images"
                className="mt-2 image-mini"
              />
            </Card>
          </div>
          <div className="ms-3">
            <div className="title-mobile">
              <small>Burger california</small>
            </div>
            <div className="footer-title">
              <small>food, healty</small>
            </div>
            <div className="rating-mobile">
              <AiFillStar />
              <small>4.7</small>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
