import React from "react";

function ExpenseStatistic(props) {
  var sum = 0;
  const month = props.data.map((value) => {
    return value.date.slice(5, 7);
  });

  const sumAmount = props.data.map((value) => {
    return parseFloat(value.amount);
  });

  for (var i = 0; i < sumAmount.length; i++) {
    sum += sumAmount[i];
  }

  const amount = props.data.map((value) => {
    return { a: parseFloat(value.amount), b: value.date.slice(5, 7) };
  });

  const percent = (val) => {
    var countAmount = 0;

    const count = amount.filter((value) => {
      return value.b === val;
    });

    count.map((value) => (countAmount += value.a));
    return countAmount;
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "15px",
        marginBottom: 5,
        backgroundColor: "#f7dbfa",
        width: "95%",
        height: 180,
        borderRadius: 15,
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        <div
          className={month.includes("01") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("01")
              ? `${(percent("01") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("01") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("01") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Jan
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("02") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("02")
              ? `${(percent("02") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("02") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("02") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Feb
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("03") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("03")
              ? `${(percent("03") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("03") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("03") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Mar
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("04") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("04")
              ? `${(percent("04") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("04") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("04") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Apr
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("05") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("05")
              ? `${(percent("05") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("05") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("05") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          May
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("06") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("06")
              ? `${(percent("06") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("06") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("06") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Jun
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("07") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("07")
              ? `${(percent("07") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("07") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("07") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Jul
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("08") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("08")
              ? `${(percent("08") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("08") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("08") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Aug
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("09") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("09")
              ? `${(percent("09") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("09") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("09") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Sep
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("10") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("10")
              ? `${(percent("10") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("10") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("10") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Oct
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("11") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("11")
              ? `${(percent("11") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("11") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("11") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Nov
        </b>
      </div>
      <div
        style={{
          backgroundColor: "#bbabef",
          height: "80%",
          width: 15,
          borderRadius: 20,
          marginLeft: 40,
          border: "1px solid black",
          position: "relative",
        }}
      >
        {" "}
        <div
          className={month.includes("12") ? "slideBarUp" : "slideBarDown"}
          style={{
            backgroundColor: "#3d21a7",
            height: month.includes("12")
              ? `${(percent("12") / sum) * 100}%`
              : "0",
            width: 15,
            borderRadius: 20,
            bottom: 0,
            border: "0px solid black",
            position: "absolute",
            transition: "height 500ms ease-in-out",
            borderStartStartRadius: percent("12") / sum === 1 ? 20 : 0,
            borderStartEndRadius: percent("12") / sum === 1 ? 20 : 0,
          }}
        ></div>
        <b
          style={{
            position: "absolute",
            marginTop: 145,
            fontSize: 10,
          }}
        >
          Dec
        </b>
      </div>
    </div>
  );
}

export default ExpenseStatistic;
