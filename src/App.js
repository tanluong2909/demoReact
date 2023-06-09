import "./App.css";
import Input from "./Component/Input";
import Button from "./Component/Button";
import { useState } from "react";
import DetailExpence from "./Component/DetailExpence";
import FilterYear from "./Component/FilterYear";
import ExpenseStatistic from "./Component/ExpenseStatistic";

function App() {
  const [display, setDisplay] = useState(false);
  const [displayExpense, setDisplayExpense] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [newExpense, setNewExpense] = useState([]);
  const [newdata, setNewdata] = useState({});

  const [selectYear, setSelectYear] = useState("");

  const handleClick = () => {
    setDisplay(!display);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const handleSubmitExpense = () => {
    setDisplayExpense(!displayExpense);
  };

  const filterYearExpense = (year) => {
    const data = newExpense.filter((value) => {
      return value.objDate.getFullYear() === parseInt(year);
    });
    return data;
  };

  const submitData = (e) => {
    e.preventDefault();
    if (title === "" || amount === "" || date === "") {
      alert("Please enter full information");
      checkInput();
      return;
    }
    removeClass();
    const objDate = new Date(date);
    const today = new Date();
    const newData = { title, amount, objDate };
    newData.id = `expense-${today.getTime()}`;
    setTitle("");
    setAmount("");
    setDate("");
    setNewExpense([...newExpense, newData]);
    setNewdata(newData);
    setSelectYear(newData.objDate.getFullYear());
  };

  const filterYear = (e) => {
    setSelectYear(e.target.value);
  };

  const checkInputTitle = () => {
    const titleInput = document.querySelector(".form__input-Title");
    titleInput.classList.add("style__input");
  };

  const checkInputAmount = () => {
    const amountInput = document.querySelector(".form__input-Amount");
    amountInput.classList.add("style__input");
  };

  const checkInputDate = () => {
    const dateInput = document.querySelector(".form__input-Date");
    dateInput.classList.add("style__input");
  };

  const checkInput = () => {
    if (title === "") {
      checkInputTitle();
    }
    if (amount === "") {
      checkInputAmount();
    }
    if (date === "") {
      checkInputDate();
    }
  };
  const removeClass = () => {
    const titleInput = document.querySelector(".form__input-Title");
    titleInput.classList.remove("style__input");
    const amountInput = document.querySelector(".form__input-Amount");
    amountInput.classList.remove("style__input");
    const dateInput = document.querySelector(".form__input-Date");
    dateInput.classList.remove("style__input");
  };

  const handleRemove = (id, year) => {
    let expense = newExpense.filter((item) => item.id !== id);
    setNewExpense(expense);
    setSelectYear(
      expense.filter((value) => {
        return value.objDate.getFullYear() === year;
      })
    );
  };


  const year = newExpense.map((year) => {
    return year.objDate.getFullYear();
  })
  const resultYear = () => {
    return newExpense.filter((value) => {return value.objDate.getFullYear() === Math.max(...year)})
  };

  return (
    <form className="container" onSubmit={submitData}>
      {!display && (
        <div className="container__form add__expense">
          <Button
            name="Add New Expense"
            bgColor="#37004f"
            fcolor="white"
            sborder="0"
            handleClick={handleClick}
          />
        </div>
      )}
      {display && (
        <div className="container__form">
          <div className="form__input">
            <Input
              value={title}
              name="Title"
              type="text"
              maxlength="25"
              width="300px"
              handleSubmitExpDisplay={(e) => {
                setTitle(e.target.value);
              }}
              onClick={removeClass}
            />
            <Input
              value={amount}
              name="Amount"
              type="number"
              step="0.01"
              width="300px"
              handleSubmitExpDisplay={(e) => {
                const limit = 10;
                setAmount(e.target.value.slice(0, limit));
              }}
              onClick={removeClass}
            />
            <Input
              value={date}
              name="Date"
              type="date"
              padding="10px"
              width="284px"
              handleSubmitExpDisplay={(e) => {
                setDate(e.target.value);
              }}
              onClick={removeClass}
            />
          </div>
          <div className="form__button">
            <Button
              name="Cancel"
              bgColor="unset"
              fcolor="#37004f"
              sborder="0"
              handleClick={handleClick}
            />
            <Button
              name="Add Expense"
              bgColor="#37004f"
              fcolor="white"
              sborder="0"
              bdRadius="5"
              type="submit"
              handleClick={() => {
                if (!displayExpense) {
                  handleSubmitExpense();
                }
              }}
            />
          </div>
        </div>
      )}
      {displayExpense && (
        <div className="container__detail">
          <FilterYear
            detailDate={newExpense}
            input={newdata}
            onClick={filterYear}
          />
          <ExpenseStatistic
            data={
              filterYearExpense(selectYear).length > 0
                ? filterYearExpense(selectYear)
                : resultYear()
            }
            onChange={filterYear}
          />
          {(filterYearExpense(selectYear).length > 0
            ? filterYearExpense(selectYear)
            : resultYear()
          )
            .sort((a, b) => a.objDate - b.objDate)
            .map((value, index) => {
              return (
                <>
                  <DetailExpence
                    data={value}
                    key={index}
                    handleRemove={handleRemove}
                  />
                </>
              );
            })}
        </div>
      )}
    </form>
  );
}

export default App;
