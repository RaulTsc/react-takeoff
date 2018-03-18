import React from 'react';

class InputField extends React.Component {

    render() {
        if(!this.props.isEditing) {
            return(<span className="list-item">{this.props.reminderText}</span>)
        } else {
            return(<input className="list-item-input" type="text" defaultValue={this.props.reminderText} ref={(c) => { this.editedText = c; }}  onChange={() => this.props.editReminderText(this.editedText.value, this.props.reminderId)} />)
        }
    }
  
};

export default InputField;
