import { useMediaQuery } from "react-responsive";
import SmallOrangeLink from "../common/SmallOrangeLink";
const getStyle = (isBigScreen: boolean) => {
  return {
    gridArea: "navbar",
    display: "flex",
    ...(isBigScreen && { flexDirection: "column" as "column" }),
    ...(!isBigScreen && { justifyContent: "center" }),
  };
};

const navLinkStyle = {
  display: "inline-block",
  margin: "10px",
  background: "rgb(53 58 69)",
  padding: "10px",
};

const NavBar = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <nav style={getStyle(isBigScreen)}>
      <span style={navLinkStyle}>
        <SmallOrangeLink to="/itunes-albums">how it worsk</SmallOrangeLink>
      </span>
      <span style={navLinkStyle}>
        <SmallOrangeLink to="/our-albums">future ideas</SmallOrangeLink>
      </span>
    </nav>
  );
};

export default NavBar;
