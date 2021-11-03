import React from "react";
import Link from "next/link";
import NavlinksStyle from "./NavlinksStyle";

export default function Navlinks({open}) {
  return (
    <NavlinksStyle open={open}>
      <ul>
        <li>
          <Link passHref href="#">
            Homens
          </Link>
        </li>
        <li>
          <Link passHref href="#">
            Mulheres
          </Link>
        </li>
        <li>
          <Link passHref href="#">
            A caminho
          </Link>
        </li>
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
      </ul>
    </NavlinksStyle>
  );
}
