import React from "react";

function Button(props) {
  return (
    <div className="add">
      <button
        onClick={props.handleClick}
        type={props.type}
        style={{
          backgroundColor: props.bgColor,
          borderRadius: 12,
          padding: 15,
          paddingLeft: 35,
          paddingRight: 35,
          fontSize: 20,
          border: props.sborder,
          marginRight: 10,
          color: props.fcolor,
          fontWeight: props.fWeight,
          cursor: "pointer",
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
