import { 
    ADD_REMINDER, 
    DELETE_REMINDER, 
    CLEAR_REMINDERS, 
    IS_EDITING_ROW,
    EDIT_REMINDER_TEXT
} from '../actionTypes';

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
    type: CLEAR_REMINDERS,
    result: {}
});


export const toggleIsEditingRow = (id, isEditing) => ({
    type: IS_EDITING_ROW,
    result: {
        id,
        isEditing,
    }
});

export const editReminderText = (text, id) => ({
    type: EDIT_REMINDER_TEXT,
    result: {
        text,
        id
    }
});