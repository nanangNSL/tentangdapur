import Style from "../../styles/pages/Home.module.css";
import DetailRecipe from "../../components/detail";

export default function HomeLogin(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <DetailRecipe/>
        </div>
      </div>
        
        </>
    )
}