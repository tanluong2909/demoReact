import React from "react";

function FilterYear(props) {
  const arrYear = [];

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
        {
          props.detailDate.forEach((element) => {
            if (!arrYear.includes(element.date.slice(0, 4))) {
              arrYear.push(element.date.slice(0, 4));
            }
            return arrYear
          })
        }
        
        {arrYear.sort().map((value, i) => {
          return <option key={i} 
          selected={value === props.input.date.slice(0, 4)  ? true : false}>
            {value}</option>;
        })}
  
      </select>
    </div>
  );
}

export default FilterYear;
