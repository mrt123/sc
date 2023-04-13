const style = {
  marginTop: "30px",
  marginBottom: "40px",
  textAlign: "center" as "center",
  fontFamily: "'Courier New', monospace",
  color: "rgba(255,255,255, 0.7)",
};

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <div style={style}>{title}</div>;
};

export default PageTitle;
