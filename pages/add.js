import Style from "../styles/pages/Home.module.css";
import Recipe from "../components/addRecipe";

export default function HomeLogin(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Recipe/>
        </div>
      </div>
        
        </>
    )
}