import React, { useState } from "react";
import "./style.scss";

const Input = (props) => {
  const data = props?.placeholder?.toString() ?? "";
  const [inputValue, setInputValue] = useState(data);

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
