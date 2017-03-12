import React from 'react';
import './InputField.css';

const InputField = (props) => {
    return (<input onChange={props.onTextChange} className="input-field" type="text"/>);
}

InputField.propTypes = {
    onTextChange: React.PropTypes.func.isRequired
};

export default InputField;