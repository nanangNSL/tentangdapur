import Style from "../styles/pages/Home.module.css";
import Head from "next/head";
import React from "react"
import Chat from "../components/chat/chat";


export default function HomeChat(){
 


    return (
        <>
        <Head>
            <title>Chat</title>
        </Head>
      
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Chat/>
        </div>
      </div>
        
        </>
    )
}