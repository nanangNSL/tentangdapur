import Style from "../styles/pages/Home.module.css";
import Navbar from "../components/navbar";
import NewRecipe from "../components/newRecipe";
import Carousell from "../components/carousell";
import Popular from "../components/popular";
import Footer from "../components/footer";

export default function Home(props) {
  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <Navbar />
          <Carousell />
          <NewRecipe />
          <Popular />
          <Footer />
        </div>
      </div>
    </>
  );
}
