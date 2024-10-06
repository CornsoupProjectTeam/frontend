import React, { useState } from "react";
import "./ToggleSwitch.css"; // 스타일은 아래에 추가

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle-switch"
        checked={isToggled}
        onChange={handleToggle}
      />
      <label className="toggle-label" htmlFor="toggle-switch">
        <span className="toggle-button"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
