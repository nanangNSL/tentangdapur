import Style from "../styles/pages/Home.module.css";
import Forgot from "../components/profile/forgot";

export default function PageForgot(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Forgot/>
        </div>
      </div>
        
        </>
    )
}