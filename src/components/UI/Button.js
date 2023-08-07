const Button = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
  };
  return <button onClick={clickHandler}>{props.children}</button>;
};

export default Button;
