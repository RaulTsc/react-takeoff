import React from 'react';

export class InputField extends React.Component {

    render() {
        if(!this.props.isEditing) {
            return(<span className="list-item">{this.props.reminder.text}</span>)
        } else {
            return(<input className="list-item-input" type="text" value={this.props.reminder.text}  onChange={(e) => this.props.editReminderText(e.target.value, this.props.reminder.id)} />)
        }
    }

};


