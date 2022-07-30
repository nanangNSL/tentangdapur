import Style from "../styles/pages/Home.module.css";
import Chat from "../components/chat";

export default function HomeChat(){
    return (
        <>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Chat/>
        </div>
      </div>
        
        </>
    )
}