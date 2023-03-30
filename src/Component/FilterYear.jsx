import React from "react";

function FilterYear(props) {
    
    // const filteredArr = props.detailDate.date.filter((year, index) => {
    //     return props.detailDate.date.indexOf(year) === index;
    // })

    // console.log(filteredArr)
  return (
    <div
      style={{
        display: "flex",
        width: "93%",
        height: 50,
        fontSize: 20,
        margin: 20,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <b
        style={{
          color: "white",
        }}
      >
        Filter by year
      </b>
      <select
        style={{
          color: "black",
          width: 190,
          borderRadius: 5,
          right: 0,
          height: 50,
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
        onChange={props.onClick}
      >
        {props.detailDate.map((value, i) => {
          return <option key={i} selected>{value.date.slice(0, 4)}</option>;
        })}
      </select>
    </div>
  );
}

export default FilterYear;
