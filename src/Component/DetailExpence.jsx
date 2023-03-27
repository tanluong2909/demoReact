import React from "react";
import Button from "./Button";

function DetailExpence(props) {
  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        backgroundColor: "#373737",
        color: "white",
        margin: "20px",
        borderRadius: "15px",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            backgroundColor: "#1d1d1d",
            display: "flex",
            flexDirection: "column",
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <div>
            <b>{props.month}</b>
          </div>
          <div>{props.year}</div>
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {props.date}
          </div>
        </div>
        <div
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 20,
          }}
        >
          <b>{props.title}</b>
        </div>
      </div>
      <div>
        <Button
          name={"$" + " " + props.amount}
          bgColor="#37004f"
          fcolor="white"
          sborder="1px solid rgb(255, 255, 255)"
        />
      </div>
    </div>
  );
}

export default DetailExpence;
