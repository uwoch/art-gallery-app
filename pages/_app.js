/* import Layout from "@/components/Layout"; */
import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import useSWR from "swr";


export default function App({ Component, pageProps }) {
  const { data, error } = useSWR('artPieces', async () => {
    const response = await fetch('https://example-apis.vercel.app/api/art');
    const data = await response.json();
    return data;
  });
  
  if (error) return <div>Error loading art pieces.</div>;
  if (!data) return <div>Loading...</div>;
  
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
