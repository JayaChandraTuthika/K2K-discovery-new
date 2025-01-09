import React from "react";
import { FaUser } from "react-icons/fa";
import { Handle, Position } from "reactflow";

// function CustomNode({ data, isConnectable, onClick }) {
//   return (
//     <div
//       className={`px-3 py-2 shadow-md rounded-md bg-white text-sm ${
//         data.type === "root" ? "custom-node-root" : "custom-node-child"
//       } `}
//       onClick={onClick}
//     >
//       <Handle
//         type="target"
//         position={Position.Top}
//         isConnectable={isConnectable}
//       />
//       <div className="font-semibold">{data.label}</div>
//       <div className="text-xs text-gray-500">{data.type}</div>
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         isConnectable={isConnectable}
//       />
//     </div>
//   );
// }

const CustomNode = ({ data }) => {
  const Icon = data.icon || FaUser;
  let bgColor;
  let textColor;
  switch (data.level) {
    case 0:
      bgColor = "#B6E2A1";
      textColor = "#295F98";
      break;
    case 1:
      bgColor = "#FF9F9F";
      textColor = "#FF8A8A";
      break;
    case 2:
      bgColor = "#F8EDE3";
      textColor = "#55AD9B";
      break;
    default:
      bgColor = "#FFDDD2";
      textColor = "#295F98";
      break;
  }

  return (
    <div
      className="rounded-sm p-1 px-2 text-xs"
      style={{ backgroundColor: bgColor, color: "black" }}
    >
      <Handle type="target" position={Position.Left} />
      <div onClick={data.onClick} className="flex gap-2 justify-center items-center">
        <Icon className="node-icon" />
        <span className="node-label">{data.label}</span>
        {data.children && data.children.length > 0 && (
          <span
            className="node-childcount"
            style={{
              backgroundColor: "#fff",
              color: "black",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20px",
              height: "20px",
              fontSize: "8px",
            }}
          >
            {data.children.length}
          </span>
        )}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;
