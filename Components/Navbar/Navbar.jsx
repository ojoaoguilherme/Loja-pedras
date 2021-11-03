import React from "react";
import NavbarStyle from "./NavbarStyle";
import Hamburger from "../Hamburger/Hamburger";
import Navlinks from "../Navlinks/Navlinks";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <NavbarStyle>
      <div onClick={() => setOpen(!open)}>
        <Hamburger />
      </div>
      <Navlinks open={open} />
    </NavbarStyle>
  );
}
