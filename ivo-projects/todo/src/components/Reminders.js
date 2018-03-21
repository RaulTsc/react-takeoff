import React from 'react';
import moment from 'moment-timezone';
import { EditButtons } from './EditButtons';
import { InputField }  from './InputField';
import { DoneButtons } from './DoneButtons';

class RemindersList extends React.Component {

    render () {
        const { 
            reminders, 
            deleteReminder, 
            toggleIsEditingRow, 
            editReminderText,
            doneReminder 
        } = this.props;
        console.log(this.props)

        return (
            <ul className="list-group">
                {
                  reminders.map((reminder) => (
                        <li key={reminder.id} className="list-group-item">
                          <DoneButtons
                            isDone={reminder.isDone}
                            doneReminder={doneReminder} 
                            reminder={reminder}
                            isEditing={reminder.isEditing}
                          />
                          <InputField 
                            reminder={reminder}
                            isEditing={reminder.isEditing}
                            editReminderText={editReminderText}
                            isDone={reminder.isDone}
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
