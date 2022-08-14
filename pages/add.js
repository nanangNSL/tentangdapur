import Style from "../styles/pages/Home.module.css";
import Recipe from "../components/addRecipe";
import Head from "next/head";

export default function HomeLogin() {
  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <Head>
            <title>Add Recipe</title>
          </Head>
            <Recipe />
         
        </div>
      </div>
    </>
  );
}
