import Style from "../styles/pages/Home.module.css";
import Profile from "../components/profile/dashboard";
import Navbar from "../components/navbar";

export default function PageProfile(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Profile/>
            <Navbar />
        </div>
      </div>
        
        </>
    )
}