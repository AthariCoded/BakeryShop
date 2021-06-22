import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import { ThemeButton, NavLinkStyled, Logo, NavStyled } from "../styles";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <img
              src={props.currentTheme === "light" ? lightLogo : darkLogo}
              width="100"
              alt={"logo"}
            />
          </Logo>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <ThemeButton onClick={props.toggleTheme} className="nav-item">
              {props.currentTheme === "Light" ? "Dark" : "Light"} mode
            </ThemeButton>
            <NavLinkStyled to="/products" className="nav-item">
              Bakery Products
            </NavLinkStyled>
          </ul>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
