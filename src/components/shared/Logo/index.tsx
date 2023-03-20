import logo from "@/assets/img/logo.svg";
import "./index.css";
interface Props {
  size?: "normal" | "small";
}
const Logo = ({ size = "normal" }: Props) => {
  const sizeClassName = size === "normal" ? "Logo" : "Logo Logo--small";
  return (
    <picture className={`${sizeClassName}`}>
      <img src={logo} alt="mopics brand logo" />
    </picture>
  );
};

export default Logo;
