import Head from "next/head"
import styles from "../styles/Layout.module.css"

const Layout = ({ title, keywords, description, children}) => {
  return (
    <>
        <Head>
            <title> {title} </title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
        </Head>
        <div className={styles.container}>{ children }</div>
    </>
  )
}

export default Layout

Layout.defaultProps = {
    title: "DJ EVENTS",
    description: "Hotest DJ Events and parties",
    keywords: "event, party, parties, edm",
}