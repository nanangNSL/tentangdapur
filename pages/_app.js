import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/router";
import App from "next/app";
import React from "react";
import Axios from "axios"


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainApp Component={Component} pageProps={pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}


const MainApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { auth } = useSelector((state) => state);

  const AxiosJWT = Axios.create();
  AxiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 10000 < currentDate.getTime()) {
        config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

  React.useEffect(() => {
   
    if (router.pathname === "/login" && auth.token) {
      router.push("/");
    }
    if (router.pathname === "/register" && auth.token) {
      router.push("/");
    }
    if (router.pathname === "/profile" && !auth.token) {
      router.push("/login");
    }
  });



  return <Component {...pageProps} />;
};