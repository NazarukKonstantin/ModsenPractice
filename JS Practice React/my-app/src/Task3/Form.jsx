const Form = ({inputValue,setInputValue}) => {
  return (
    <input type="text" value={inputValue} onChange={event=>setInputValue(event.target.value)}/>
  )
};

export default Form;
