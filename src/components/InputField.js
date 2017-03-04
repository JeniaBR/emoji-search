import React from 'react';
import './InputField.css';

const InputField = (props) => {
    return (<input onChange={props.onTextChange} className="input-field" type="text"/>);
}

export default InputField;