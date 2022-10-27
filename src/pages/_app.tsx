import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Nav from "../components/Nav";
import Header from "../components/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <div>
    <Header />
    <Nav />
    <Component {...pageProps} />
  </div>;
};

export default MyApp;
