import React from "react";
import Link from "next/link";
import styled from 'styled-components';

const LogoStyle = styled.div`
  &:hover{
    cursor: pointer;
  }
`

export default function Logo() {
  return (
    <LogoStyle>
      <Link passHref href="/">
        <h1>Loja de Pedras</h1>
      </Link>
    </LogoStyle>
  );
}
