import Style from "../styles/pages/Home.module.css";
import Error from "../components/error404/errorhandle";

export default function HomeChat(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Error/>
        </div>
      </div>
        
        </>
    )
}