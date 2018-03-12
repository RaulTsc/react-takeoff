import React from 'react';

const InputField = (props) => {
    if(!props.isEditing) {
        return(<span className="list-item">{props.text}</span>)
    } else {
        return(<input type="text" ref={(c) => { this.taskInput = c; }}  />)
    }
};

export default InputField;