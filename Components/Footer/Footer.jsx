import React from "react";
import FooterStyle from "./FooterStyle";
import Logo from "../Logo/Logo";
export default function Footer() {
  return (
    <FooterStyle>
      <div className="content">
        <Logo />

        <ul>
          <li>facebook</li>
          <li>Instagram</li>
          <li>Contato</li>
        </ul>

        <p>Copyright © 2021, todos os direitos reservados.</p>
      </div>
    </FooterStyle>
  );
}
