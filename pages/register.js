import Style from "../styles/pages/Home.module.css";
import Register from "../components/form/register";

export default function HomeRegister(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Register/>
        </div>
      </div>
        
        </>
    )
}