import Style from "../styles/pages/Home.module.css";
import Edit from "../components/profile/edit.js";
import Navbar from "../components/navbar";
import Head from "next/head"

export default function PageUpdate(){
    return (
        <>
        <Head>
            <title>Page Update</title>
        </Head>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Edit/>
            <Navbar />
        </div>
      </div>
        
        </>
    )
}