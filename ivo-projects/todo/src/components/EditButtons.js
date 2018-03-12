import React from 'react';
import {
  FaPencil,
  FaCheck 
} from 'react-icons/lib/fa';

const EditButtons = (props) => {
        if(!props.isEditing) {
            return(
                <button 
                    className="list-item btn btn-dark btn-xs pull-right edit"
                    onClick={() => {props.toggleIsEditingRow(props.id, true)}}
                >
                    <FaPencil />
                </button>
                );
        } else {
            return(
                <button 
                    className="list-item btn btn-success btn-xs pull-right edit"
                    onClick={() => {props.toggleIsEditingRow(props.id, false)}}
                >
                    <FaCheck />
                </button>
                );
        } 
}

export default EditButtons;