import MyButt from "./MyButt";
import Form from "./Form";
import { useState } from "react";

const Task3 = () => {
  const [inputValue, setInputValue]=useState("Text");

  return (
    <div>
      <Form inputValue={inputValue} setInputValue={setInputValue}/>
      <MyButt inputValue={inputValue}/>
    </div>
  )
};

export default Task3;
