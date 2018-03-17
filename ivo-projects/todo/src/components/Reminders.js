import React from 'react';
import moment from 'moment-timezone';
import EditButtons from './EditButtons';
import InputField from './InputField';

class RemindersList extends React.Component {

    render () {
        const { reminders, deleteReminder, toggleIsEditingRow } = this.props;
        return (
            <ul className="list-group">
                {
                  reminders.map((reminder) => (
                        <li key={reminder.id} className="list-group-item">
                          <InputField 
                            reminderText={reminder.text}
                            isEditing={reminder.isEditing}
                          />        
                            <button
                                className="list-item btn btn-danger btn-xs pull-right"
                                onClick={() => deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </button>
                            <EditButtons 
                                toggleIsEditingRow={toggleIsEditingRow}
                                isEditing={reminder.isEditing}
                                reminderId={reminder.id}
                            />
                            <div className="list-item time">
                                {
                                    moment(new Date(reminder.dueDate))
                                    .fromNow()
                                }
                            </div>
                        </li>))
                }
            </ul>
        );
    }
}

export default RemindersList;
