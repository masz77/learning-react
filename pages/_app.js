import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { useEffect } from "react";
import MyNavbar from "../components/Navbar";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("antd/dist/antd");
  }, []);

  return (
    <>
      <NextNProgress />
      <MyNavbar />
      <br></br>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
