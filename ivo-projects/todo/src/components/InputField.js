import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedReminderText: props.reminderText
        };
    };


    render() {
        if(!this.props.isEditing) {
            return(<span className="list-item">{this.state.editedReminderText}</span>)
        } else {
            return(<input type="text" placeholder='Enter new text...' onChange={e => this.setState({editedReminderText: e.target.value}) } />)
        }
    }
  
};

export default InputField;