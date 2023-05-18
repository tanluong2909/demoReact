import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function DetailExpence(props) {
  return (
    <div
      className="statistic__output"
      onClick={props.onClick}
      style={{
        display: "flex",
        paddingTop: 10,
        backgroundColor: "#373737",
        color: "white",
        margin: 15,
        marginTop: 10,
        borderRadius: "15px",
        alignItems: "center",
        width: "95%",
        justifyContent: "space-between",
        position: "relative",
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
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <div>
            <b>{props.data.objDate.toLocaleString(["en-US"], {
                      month: "long",
                    })}</b>
          </div>
          <div>{props.data.objDate.getFullYear()}</div>
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {props.data.objDate.getDate()}
          </div>
        </div>
        <div
          className="output__title"
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 20,
          }}
        >
          <b>{props.data.title}</b>
        </div>
      </div>
      <div className="output__amount">
        <b>
          <Button
            name={"$ " + props.data.amount}
            bgColor="#37004f"
            fcolor="white"
            sborder="1px solid rgb(255, 255, 255)"
            fWeight="700"
            handleClick={(e) => {
              e.preventDefault();
            }}
          />
        </b>
      </div>
      <FontAwesomeIcon
        style={{
          position: "absolute",
          right: 5,
          top: 5,
          color: "white",
          cursor: "pointer",
        }}
        icon={faXmark}
        onClick={() => props.handleRemove(props.data.id, props.data.objDate.getFullYear())}
      />
    </div>
  );
}

export default DetailExpence;
