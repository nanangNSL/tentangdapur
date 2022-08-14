import Style from "../styles/pages/Home.module.css";
import Error from "../components/error404/errorhandle";
import Head from "next/head";

export default function HomeChat(){
    return (
        <>
        <Head>
            <title>error 404</title>
        </Head>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Error/>
        </div>
      </div>
        
        </>
    )
}