import Style from "../styles/pages/Home.module.css";
import Head from "next/head";
import React from "react"
import Navbar from "../components/navbar";


export default function HomeChat(){
    React.useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID="15480ad5-2995-4ec1-a696-7d066666edf7";
        (() => {
          const d = document;
          const s = d.createElement("script");
          s.src = "https://client.crisp.chat/l.js";
          s.async = 1;
          d.getElementsByTagName("body")[0].appendChild(s);
        })();
      });
    return (
        <>
        <Head>
            <title>Chat</title>
        </Head>
      
        <div className={Style.containerFluid}>
        <div className={Style.container}>
            <Navbar/>
        </div>
      </div>
        
        </>
    )
}