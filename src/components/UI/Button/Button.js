const Button = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
  };
  return <button onClick={clickHandler}>{props.text}</button>;
};

export default Button;
