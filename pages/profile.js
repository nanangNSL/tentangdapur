import Style from "../styles/pages/Home.module.css";
import Profile from "../components/profile";

export default function HomeChat(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Profile/>
        </div>
      </div>
        
        </>
    )
}