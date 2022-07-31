import { Card } from "react-bootstrap";

export default function Error() {
    return (
        <div className="container-login">
            <div>
            <Card.Img
              src="/error404.png"
              width={300}
              height={300}
              alt="Images"
            />
            <h1 className="text-center">Site not found</h1>
            </div>
      </div>
    );
}