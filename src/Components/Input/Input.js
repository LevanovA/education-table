import React, { useState } from "react";
import "./style.scss";

const Input = ({ placeholder }) => {
  const data = placeholder != null ? placeholder.toString() : "";
  const [inputValue, setInputValue] = useState(placeholder);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder={data}
        onChange={onChange}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
