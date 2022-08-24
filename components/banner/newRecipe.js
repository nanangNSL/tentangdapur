import Link from "next/link";
import Card from "react-bootstrap/Card";

export default function NewRecipe() {
  return (
    <Card className="banner-pop-mobile-new  d-flex flex-row  border-0">
      <div className="col-6 mt-2">
        <h1 style={{ fontSize: "18px" }}>New Recipe</h1>
      </div>
      <div className="col-6 mt-2">
        <Link href="/search"className="text-end see-all me-2 text-decoration-none">see all</Link>
      </div>
    </Card>
  );
}
