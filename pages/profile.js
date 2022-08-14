import Style from "../styles/pages/Home.module.css";
import Profile from "../components/profile/dashboard";
import Navbar from "../components/navbar";
import Head from "next/head"

export default function PageProfile(){
    return (
        <>
        <Head>
            <title>Profile</title>
        </Head>
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Profile/>
            <Navbar />
        </div>
      </div>
        
        </>
    )
}