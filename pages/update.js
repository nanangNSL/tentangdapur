import Style from "../styles/pages/Home.module.css";
import Edit from "../components/profile/edit.js";
import Navbar from "../components/navbar";

export default function PageUpdate(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Edit/>
            <Navbar />
        </div>
      </div>
        
        </>
    )
}