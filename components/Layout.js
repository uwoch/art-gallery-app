import Navigation from "./navigation/index.js";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Main></Main>
      <Navigation />
    </>
  );
}
