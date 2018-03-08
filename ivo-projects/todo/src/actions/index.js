import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, EDIT_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    };
    console.log('adding a remainder action', action);
    return action;
};

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    return action;
};

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    };
    return action;
}

export const editReminder = (text) => {
    const action = {
        type: EDIT_REMINDER,
        text
    };
    return action;
}
