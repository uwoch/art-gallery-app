import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
/* import Layout from "../components/Layout.js"; */

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
