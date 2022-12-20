import Tooltip from "@mui/material/Tooltip";
import "./style.css";

const Button = ({ handleClick, tooltip = "", content = "" }) => {
  return (
    <Tooltip title={tooltip}>
      <div className="ext-button" onClick={handleClick}>
        {content}
      </div>
    </Tooltip>
  );
};

export default Button;
