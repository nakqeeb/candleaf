import { NavLink } from "react-router-dom";
import "./CustomLink.css";
import { FC } from "react";

const CustomLink: FC<{
  name: string;
  to?: string;
  className?: any;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}> = ({ name, to, className, onClick }) => {
  return (
    <NavLink
      type="button"
      className={`custom-link ${className}`}
      to={to || ""}
      onClick={onClick}
    >
      {name}
    </NavLink>
  );
};

export default CustomLink;
