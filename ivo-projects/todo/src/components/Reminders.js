import React from 'react';
import moment from 'moment-timezone';
import { EditButton } from './EditButton';
import { InputField }  from './InputField';
import { DoneButton } from './DoneButton';

class RemindersList extends React.Component {

    render () {
        const { 
            reminders, 
            deleteReminder, 
            toggleIsEditingRow, 
            editReminderText,
            doneReminder 
        } = this.props;

        return (
            <ul className="list-group">
                {
                  Object.keys(reminders).map((reminder) => (
                        <li key={reminder.id} className="list-group-item">
                          <DoneButton
                            doneReminder={doneReminder} 
                            reminder={reminder}
                          />
                          <InputField 
                            reminder={reminder}
                            editReminderText={editReminderText}
                          />        
                          <button
                            className="list-item btn btn-danger btn-xs pull-right"
                            onClick={() => deleteReminder(reminder.id)}
                          >
                            &#x2715;
                          </button>
                          <EditButton 
                            toggleIsEditingRow={toggleIsEditingRow}
                            reminder={reminder}
                          />
                          <div className={"list-item-time" + (reminder.isEditing ? '-editingMode' : '-nonEditingMode')}>
                            {
                                moment(new Date(reminder.dueDate))
                                    .fromNow()
                            }
                          </div>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default RemindersList;
