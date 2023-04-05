import React from "react";

function Input(props) {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div>
        <label>
          <b>{props.name}</b>
        </label>
      </div>
      <input
        onChange={props.handleSubmitExpDisplay}
        type={props.type}
        name={props.value}
        maxLength={props.maxlength}
        value={props.value}
        step={props.step}
        min={props.min}
        style={{
          color: "black",
          minHeight: 40,
          borderRadius: 5,
          fontSize: 18,
          marginTop: 10,
          border: 0,
          paddingLeft: props.padding,
          paddingRight: props.padding,
          width: props.width,
        }}
      />
    </div>
  );
}

export default Input;
