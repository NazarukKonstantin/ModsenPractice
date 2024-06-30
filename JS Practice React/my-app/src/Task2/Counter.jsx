import { useEffect, useState } from "react";

const Counter = ({ value, setValue }) => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    if (value > 10) {
      setColor("red");
    }
  }, [value]);

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => {
        setValue(value + 1);
      }}
    >Counter</button>
  );
};

export default Counter;
