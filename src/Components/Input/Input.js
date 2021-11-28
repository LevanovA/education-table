import React, {useState} from "react";
import "./style.scss"

const Input = ({placeholder}) => {
    // const { placeholder } = props;
    const data = placeholder !== null ? placeholder.toString() : '';
    const [inputValue,setInputValue] = useState(placeholder);

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

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
    )
}

/*function Input({props, placeholder}) {
    const data = placeholder !== null ? placeholder.toString() : '';
    const [inputValue,setInputValue] = useState(placeholder);

    function onChange(e) {
        setInputValue(e.target.value);
        console.log(111, inputValue)
    }

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
    )
}*/

export default Input