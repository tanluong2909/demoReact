import React from "react";

function Expensestatistic(props) {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const sumAmount = props.data.map((value) => {
    return parseFloat(value.amount);
  });

  var sum = 0;
  for (var i = 0; i < sumAmount.length; i++) {
    sum += sumAmount[i];
  }

  const arrMonth = props.data.map((value) => {
    return value.objDate.getMonth() + 1;
  });

  const objAmount = props.data.map((value) => {
    return {
      amount: parseFloat(value.amount),
      month: value.objDate.getMonth() + 1,
    };
  });

  const percent = (val) => {
    var countAmount = 0;

    const count = objAmount.filter((value) => {
      return value.month === val;
    });

    count.map((value) => (countAmount += value.amount));
    return countAmount;
  };

  const heightPercent = (val) => {
    return arrMonth.includes(val) ? `${(percent(val) / sum) * 100}%` : "0";
  };

  const borderRadius = (val) => {
    return percent(val) / sum === 1 ? 20 : 0;
  };

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  return (
    <div className="statistic">
      {month.map((item, index) => (
        <div className="statistic__month">
          <div
            className="transition"
            style={{
              height: heightPercent(item),
              borderStartStartRadius: borderRadius(item),
              borderStartEndRadius: borderRadius(item),
            }}
          ></div>
          <b className="title">{getMonthName(index)}</b>
        </div>
      ))}
    </div>
  );
}

export default Expensestatistic;
