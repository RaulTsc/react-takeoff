import React from 'react';
import {
    FaSquareO,
    FaCheckSquareO 
} from 'react-icons/lib/fa';

export const DoneButtons = (props) => {
    if(props.isDone) {
        return(
            <button 
                className={"list-item btn-default btn-xs done-button" + (props.isEditing ? '-hidden' : '-show')}
                onClick={() => {props.doneReminder(props.reminder.id, false)}}
            >
                <FaCheckSquareO />
            </button>
            );
    } else {
        return(
            <button 
                className={"list-item btn-default btn-xs done-button" + (props.isEditing ? '-hidden' : '-show')}
                onClick={() => {props.doneReminder(props.reminder.id, true)}}
            >
                <FaSquareO />
            </button>
        );
    } 
}


