import Link from "next/link";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  list-style: none;
  border-radius: 100%;
  justfy-content: center;
  position: fixed;
  margin-top: 30px;
  width: 100%;
  bottom: 0;
`;


const NavLink = styled(Link)`
font-family: "Gill Sans", sans-serif;
font-size: 20px;
color: #16537e;
background-color: white;
border: none;
padding: 10px;
justfy-content: center;
text-decoration: none;

&:hover {
    background: #16537e;
    border-radius: 5%;
    color: #ffeeee;
    cursor: pointer;
  }
`;

export default function Navigation() {
  return (
    <nav>
      <NavList>
        <li>
          <NavLink href="/">Spotlight</NavLink>
        </li>
        <li>
          <NavLink href="/art-pieces">Art Pieces</NavLink>
        </li>
        <li>
          <NavLink href="/favorites">Favorites</NavLink>
        </li>
      </NavList>
    </nav>
  );
}
