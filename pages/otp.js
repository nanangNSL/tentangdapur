import Style from "../styles/pages/Home.module.css";
import Otp from "../components/profile/otp.js";

export default function PageOtp(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Otp/>
        </div>
      </div>
        
        </>
    )
}