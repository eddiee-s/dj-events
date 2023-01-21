import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase/>}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "DJ EVENTS",
  description: "Hotest DJ Events and parties",
  keywords: "event, party, parties, edm",
};
