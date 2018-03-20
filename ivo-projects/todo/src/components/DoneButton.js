import React from 'react';

export const DoneButton = (props) => {
        
        return(
            <input 
                className={"toggle" + (props.reminder.isEditing ? '-hidden' : '-show')}
                type="checkbox"
                onClick={() => {props.doneReminder(props.reminder.id, !props.reminder.isDone)}}
            >
            </input>
        );

}
