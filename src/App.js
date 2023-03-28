import "./App.css";
import Input from "./Component/Input";
import Button from "./Component/Button";
import { useState } from "react";
import DetailExpence from "./Component/DetailExpence";

function App() {
  const [display, setDisplay] = useState(false);
  const [displayExpense, setDisplayExpense] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [newExpense, setNewExpense] = useState([]);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleSubmitExpense = () => {

    

    setDisplayExpense(!displayExpense);
    
  };


  const submitData = (e) => {
   
    e.preventDefault();
    if(title === '' || amount === '' || date === ''){
      alert("Please enter full information")
      return
    }
    const newData = { title, amount, date };

   

    
    setTitle("");
    setAmount("");
    setDate("");

    setNewExpense([...newExpense, newData]);
    console.log(newExpense)
  };

  const stringMonth = (date) => {
    var month = ''
      switch(date){
        case '01': month = "January";
            break;
        case '02': month = "February";
            break;
        case '03': month = "March";
            break;
        case '04': month = "April";
            break;
        case '05': month = "May";
            break;
        case '06': month = "June"; 
            break;
        case '07': month = "July";
            break;
        case '08': month = "August";
            break;
        case '09': month = "September";
            break;
        case '10': month = "October";
            break;
        case '11': month = "November";
            break;
        case '12': month = "December";
            break;
      }
      return month;
  }
  
  return (
    <form className="Container" onSubmit={submitData} >
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
              value={title}
              name="Title"
              type="text"
              maxlength="25"
              handleSubmitExpDisplay={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              // handleNumChange={handleNumChange}
              value={amount}
              name="Amount"
              type="number"
              step="0.01"
              handleSubmitExpDisplay={(e) => {
                const limit = 10    ;
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
            />
          </div>
          <div className="Form__button"
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
                if (!displayExpense) {
                  
                  handleSubmitExpense();
                }
              }}
            />
          </div>
        </div>
      )}
      {
        displayExpense && 
        (
        <div className="Detail">
          {newExpense.map((value, index) => {
            return (
              <DetailExpence
                month={stringMonth(value.date.slice(5,7))}
                year={value.date.slice(0,4)}
                date={value.date.slice(8,10)}
                key={index}
                amount={value.amount}
                title={value.title}
              />
            )
          })}
        </div>)
      }
    </form>
  );
}
export default App;
