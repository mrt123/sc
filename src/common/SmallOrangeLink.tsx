import { Link, LinkProps } from "react-router-dom";

const style = {
  textDecoration: "none",
  color: "orange",
  fontSize: "17px",
  display: "inline-block",
  fontFamily: '"Roboto","Arial",sans-serif',
  fontWeight: "200",
};

const SmallOrangeLink = (props: LinkProps) => {
  return (
    <Link {...props} style={style}>
      {props.children}
    </Link>
  );
};
export default SmallOrangeLink;
