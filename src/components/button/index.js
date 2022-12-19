import "./style.css";

const Button = ({ handleClick }) => {
  return (
    <div className="button" onClick={handleClick}>
      Estrai
    </div>
  );
};

export default Button;
