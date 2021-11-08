import React from "react";
import Link from "next/link";
import NavlinksStyle from "./NavlinksStyle";

export default function Navlinks({open}) {
  return (
    <NavlinksStyle open={open}>
      <ul>
        <li>
          <Link passHref href="#">
            Pedras Lapidadas
          </Link>
        </li>
        <li>
          <Link passHref href="#">
            Pedras Brutas
          </Link>
        </li>
        <li>
          <Link passHref href="#">
            Joias
          </Link>
        </li>
      </ul>
    </NavlinksStyle>
  );
}
