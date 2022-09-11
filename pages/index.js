import Style from "../styles/pages/Home.module.css";
import Navbar from "../components/navbar";
import NewRecipe from "../components/newRecipe";
import Carousell from "../components/carousell";
import Popular from "../components/popular";
import Footer from "../components/footer";
import BarBrand from "../components/search/bar";
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <BarBrand  />
          <Navbar  />
          <Carousell />
          <NewRecipe  />
          <Popular  />
          <Footer />
        </div>
      </div>
    </>
  );
}
