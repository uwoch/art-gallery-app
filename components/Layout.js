import Navigation from "./navigation/index.js";
import Head from "next/head.js";
import styled from "styled-components";

const Headline = styled.h1`
  text-align: center;
  font-family: "Gill Sans", sans-serif;
`;


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Headline>Art Gallery</Headline>
      {children}
      <Navigation />
    </>
  );
}
