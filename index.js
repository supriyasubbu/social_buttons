const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="inside-container">
      <h1 className="heading">social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="button1" />
        <Button buttonText="Comment" className="button2" />
        <Button buttonText="Share" className="button3" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
