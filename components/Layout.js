import Navigation from "./navigation/index.js";
import Head from "next/head.js";
import styled from "styled-components";

const Headline = styled.h1`
  text-align: center;
  font-family: "Gill Sans", sans-serif;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;


export default function Layout({ children }) {
  return (
    <>
    <Wrapper>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Headline>Art Gallery</Headline>
      {children}
      <Navigation />
    </Wrapper>
    </>
  );
}
