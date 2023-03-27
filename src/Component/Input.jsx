import React from "react";

function Input(props) {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div>
        <label
          style={
            {
              // paddingLeft: 10,
            }
          }
        >
          <b>{props.name}</b>
        </label>
      </div>
      <input
        // onChange={props.handleSubmitExpDisplay}
        onChange={props.handleNumChange}
        type={props.type}
        name={props.value}
        maxLength={props.maxlength}
        value={props.value}
        step={props.step}
        min={props.min}
        style={{
          color: "black",
          minHeight: 40,
          minWidth: 300,
          borderRadius: 5,
          fontSize: 18,
          marginTop: 10,
          border: 0,
        }}
      />
    </div>
  );
}

export default Input;
