import { Row, Card, Container } from "react-bootstrap";
import Banner from "../banner";

export default function NewRecipe() {
  return (
    <Container fluid>
      <Banner />
        <Container className="fluid">
          <Row className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll mt-2">
            <Card className="card-container">
              <Card.Img
                src="/food1.jpg"
                width={100}
                height={150}
                alt="Images"
              />
              <Card.Title className="title-card">Card Title</Card.Title>
            </Card>
            <Card className="card-container">
              <Card.Img
                src="/food2.jpg"
                width={100}
                height={150}
                alt="Images"
              />
              <Card.Title className="title-card">Card Title</Card.Title>
            </Card>
            <Card className="card-container">
              <Card.Img
                src="/food3.jpg"
                width={100}
                height={150}
                alt="Images"
              />
              <Card.Title className="title-card">Card Title</Card.Title>
            </Card>
            <Card className="card-container">
              <Card.Img
                src="/food4.jpg"
                width={100}
                height={150}
                alt="Images"
              />
              <Card.Title className="title-card">Card Title</Card.Title>
            </Card>
          </Row>
      </Container>
    </Container>
  );
}
