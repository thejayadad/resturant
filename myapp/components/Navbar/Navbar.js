'use client'
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { FaShoppingBag } from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from "../../responsive.js";
import Link from 'next/link';

const Nav = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MenuButton = styled.div`
  cursor: pointer;
  display: block; /* Show on mobile screens */
  ${mobile({ display: "none" })} /* Hide on desktop screens */
`;

const MenuItems = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ${mobile({ fontSize: "12px", marginLeft: "10px", display: (props) => (props.open ? "block" : "none") })}
`;


const ActionItems = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Navbar = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Gallery', link: '/gallery' },
  ];

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Nav>
      <Container>
        <Logo>DaMarket Spot</Logo>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span>&#215;</span>
          ) : (
            <span>&#8801;</span>
          )}
        </MenuButton>
        <MenuItems open={menuOpen}>
          {menuLinks.map((menuLink) => (
            <Link href={menuLink.link} key={menuLink.name}>
              {menuLink.name}
            </Link>
          ))}
        </MenuItems>
        <ActionItems>
          <FaShoppingBag />
          <button onClick={() => signOut()}>SignOut</button>
        </ActionItems>
      </Container>
    </Nav>
  );
};

export default Navbar;
