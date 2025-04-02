import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  function handlecolorchange(event) {
    setColor(event.target.value);
  }
  return (
    <>
      <div className="color-picker-container">
        <h1>color picker</h1>
        <div className="color-dispaly" style={{ backgroundColor: color }}>
          <p>Selected color:{color}</p>
        </div>
        <label htmlFor=""> select color</label>
        <input type="color" value={color} onChange={handlecolorchange} />
      </div>
    </>
  );
}

export default ColorPicker;
