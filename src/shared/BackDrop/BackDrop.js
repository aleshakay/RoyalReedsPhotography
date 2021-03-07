import React from "react";
import "./BackDrop.scss";

const BackDrop = ({ close }) => {
  return <div onClick={close} className="backdrop" />;
};

export default BackDrop;