import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import MyNavbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <MyNavbar />
      <br></br>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
