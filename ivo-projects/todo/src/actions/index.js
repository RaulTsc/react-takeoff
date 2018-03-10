import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, IS_EDITING_ROW, EDIT_REMINDER } from '../actionTypes';

export const addReminder = (text, dueDate) => ({
    type: ADD_REMINDER,
    result: {
        text,
        dueDate
    }
});

export const deleteReminder = (id) => ({
    type: DELETE_REMINDER,
    result: {
        id
    }
});

export const clearReminders = () => ({
    type: CLEAR_REMINDERS
});


export const toggleIsEditingRow = (id, isEditing, text) => ({
    type: IS_EDITING_ROW,
    result: {
        id,
        isEditing,
        text
    }
});

export const editReminder = (text) => ({
    type: EDIT_REMINDER,
    result: {
        text
    }
});