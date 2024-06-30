import { useState } from "react";
import Counter from "./Counter";

const Task2 = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <Counter value={value} setValue={setValue}/>
    </div>
  );
};

export default Task2;
