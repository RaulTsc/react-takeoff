import React from 'react';
import moment from 'moment-timezone';
import { FaPencil, FaCheck } from 'react-icons/lib/fa'

//onClick={() => editReminder(reminder.text)}
//          onClick={() => submitReminder(reminder.text)}
class RemindersList extends React.Component {

    renderEditButtons(){
        if(!this.props.editItem){
           return(<button 
            className="list-item btn btn-dark btn-xs pull-right edit"
          >
            <FaPencil />
            </button>);
         } else {
             return(<button 
             className="list-item btn btn-success btn-xs pull-right edit"
   >
             <FaCheck />
             </button>)
        }
     }

    render () {
        const { reminders, deleteReminder } = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map((reminder) => (
                        <li key={reminder.id} className="list-group-item">
                            <span className="list-item">{reminder.text}</span>
                            <button
                                className="list-item btn btn-danger btn-xs pull-right"
                                onClick={() => deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </button>
                            {this.renderEditButtons()}
                            <div className="list-item time">
                                {
                                    moment(new Date(reminder.dueDate))
                                    .fromNow()
                                }
                            </div>
                        </li>))
                }
            </ul>);
    }
}

export default RemindersList;
