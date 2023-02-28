import "@/styles/globals.css";
import "../styles/App.scss";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import connectDB from "@/database/conn";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import ThemeProvider from "react-bootstrap/ThemeProvider";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    connectDB();
  }, []);

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
