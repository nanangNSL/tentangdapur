import Style from "../styles/pages/Home.module.css";
import Login from "../components/form/Login";
import React from "react";


export default function HomeLogin() {

  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <Login />
        </div>
      </div>
    </>
  );
}
