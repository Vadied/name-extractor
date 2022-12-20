import "./style.css";
import Button from "../button";
import { names } from "../extractor/constants";

const FakeButton = ({ handleClick }) => {
  const onClicK = () => {
    const random = Math.floor(Math.random() * names.length);
    handleClick(random);
  };

  return (
    <div className="button">
      <div className="btn std-1" onClick={() => handleClick(16)}></div>
      <Button
        handleClick={onClicK}
        tooltip="Clicca per estrarre"
        content="Estrai"
      />
      <div className="btn std-2" onClick={() => handleClick(5)}></div>
    </div>
  );
};

export default FakeButton;
