import "./App.css";
import Input from "./Component/Input";
import Button from "./Component/Button";
import { useState } from "react";
// import DetailExpence from "./Component/DetailExpence";

function App() {
  const [display, setDisplay] = useState(false);
  const [displayExpense, setDisplayExpense] = useState(false);
  const [amount, setAmount] = useState()


  const [values, setValues] = useState([
    {
      title: "",
      amount: "",
      date: "",
    },
  ]);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleSubmitExpDisplay = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitExpense = () => {
      
  };
  const handleNumChange = (event) => {
    const limit = 15;
    setAmount(event.target.value.slice(0, limit));
  };

  const submitHandle = e => {
    e.preventDefault()
  }

  return (
    <div className="Container">
      {!display && (
        <div className="Form Add__Expence">
          <Button
            name="Add New Expence"
            bgColor="#37004f"
            fcolor="white"
            sborder="0"
            handleClick={handleClick}
          />
        </div>
      )}
      {display && (
        <div className="Form">
          <div className="Form__input">
            <Input
              value={values.title}
              name="Title"
              type="text"
              maxlength="25"
              handleSubmitExpDisplay={handleSubmitExpDisplay}
            />
            <Input
              handleNumChange={handleNumChange}
              value={amount}
              name="Amount"
              type="number"
              step="0.01"
              handleSubmitExpDisplay={handleSubmitExpDisplay}
            />
            <Input
              value={values.date}
               name="Date"

              handleSubmitExpDisplay={handleSubmitExpDisplay}
              type="date"
            />
          </div>
          <div className="Form__button"
          //  onSubmit={submitHandle}
           >
            <Button
              name="Cancel"
              bgColor="unset"
              fcolor="#37004f"
              sborder="0"
              handleClick={handleClick}
            />
            <Button
              name="Add Expence"
              bgColor="#37004f"
              fcolor="white"
              sborder="0"
              bdRadius="5"
              type="submit"
              handleClick={() => {
                handleSubmitExpense()
                // if (!displayExpense) {
                //   handleSubmitExpense();
                // }
              }}
            />
          </div>
        </div>
      )}
      {/* {displayExpense && (
        <div className="Detail">
          <DetailExpence
            // month={values.date.getMonth()}
            // year={values.date.getFullYear()}
            // date={values.date.getDate()}
            amount={values.amount}
            title={values.title}
          />
        </div>
      )} */}
    </div>
  );
}

export default App;
