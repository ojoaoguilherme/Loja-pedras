import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import MenuStyle from "./MenuStyle";

export default function Menu() {
  return (
    <MenuStyle>
      <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </MenuStyle>
  );
}
