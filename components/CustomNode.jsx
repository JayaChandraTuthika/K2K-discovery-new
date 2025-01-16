import React from "react";
import { FaPhoneAlt, FaRegUser, FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { Handle, Position } from "reactflow";
import { TbListDetails } from "react-icons/tb";

const iconTypes = ["email", "phone", "url", "person", "data"];

const CustomNode = ({ data }) => {
  let Icon = data.icon || TbListDetails;
  const iconType = data.type || "default";
  if (iconType == "email") {
    Icon = MdOutlineMail;
  } else if (iconType == "phone") {
    Icon = FaPhoneAlt;
  } else if (iconType == "url") {
    Icon = IoIosLink;
  } else if (iconType == "person") {
    Icon = FaRegUser;
  } else if (iconType == "data") {
    Icon = TbListDetails;
  }
  let bgColor;
  let textColor;
  switch (data.level) {
    case 0:
      bgColor = "#227f8a";
      textColor = "#295F98";
      break;
    case 1:
      bgColor = "#5b27a3";
      textColor = "#FF8A8A";
      break;
    case 2:
      bgColor = "#732c59";
      textColor = "#55AD9B";
      break;
    default:
      bgColor = "#FFDDD2";
      textColor = "#295F98";
      break;
  }

  return (
    <div className="custom-node" style={{ borderColor: bgColor, color: "white" }}>
      <Handle type="target" style={{ backgroundColor: bgColor }} position={Position.Left} />
      <div
        onClick={data.onClick}
        className="node-header"
        style={{ backgroundColor: bgColor, color: "white", borderColor: bgColor }}
      >
        <Icon className="node-icon" />
        <span className="node-label">{data.label}</span>
        {data.children && data.children.length > 0 && (
          <span className="node-childcount">{data.children.length}</span>
        )}
      </div>
      <Handle type="source" position={Position.Right} style={{ backgroundColor: bgColor }} />
      <div className="node-description">
        {data.value.map((val) => (
          <p>{val}</p>
        ))}
      </div>
    </div>
  );
};

export default CustomNode;
