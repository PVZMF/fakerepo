import React from "react";
import "./icon.button.style.scss";
import { Link } from "react-router-dom";

const IconButton = ({ onClick, children, href }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Link to={href}>
      <div role={"button"} onClick={handleClick} className="IconButton">
        {children}
      </div>
    </Link>
  );
};

export default IconButton;
