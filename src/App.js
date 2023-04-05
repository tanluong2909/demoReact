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

  const [filterYearEx, setFilterYearEx] = useState([]);

  const handleClick = () => {
    setDisplay(!display);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const handleSubmitExpense = () => {
    setDisplayExpense(!displayExpense);
  };

  const submitData = (e) => {
    e.preventDefault();
    if (title === "" || amount === "" || date === "") {
      alert("Please enter full information");
      return;
    }
    const objDate = new Date(date);

    const newData = { title, amount, objDate };
    setTitle("");
    setAmount("");
    setDate("");
    setNewExpense([...newExpense, newData]);
    setNewdata(newData);

    setFilterYearEx([
      ...newExpense.filter((value) => {
        return value.objDate.getFullYear() === objDate.getFullYear();
      }),
      newData,
    ]);
  };

  const filterYear = (e) => {
    setFilterYearEx(
      newExpense.filter((value) => {
        return value.objDate.getFullYear() === parseInt(e.target.value);
      })
    );
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
            />
            <Input
              value={date}
              name="Date"
              handleSubmitExpDisplay={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              padding="10px"
              width="284px"
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
        <div className="detail">
          <FilterYear
            detailDate={newExpense}
            input={newdata}
            onClick={filterYear}
          />
          <ExpenseStatistic data={filterYearEx} onChange={filterYear} />
          {filterYearEx.map((value, index) => {
            return (
              <>
                <DetailExpence
                  month={value.objDate.toLocaleString(["en-US"], {
                    month: "long",
                  })}
                  year={value.objDate.getFullYear()}
                  date={value.objDate.getDate()}
                  key={index}
                  amount={value.amount}
                  title={value.title}
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
