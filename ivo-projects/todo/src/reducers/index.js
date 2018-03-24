import { 
    ADD_REMINDER, 
    DELETE_REMINDER, 
    CLEAR_REMINDERS, 
    IS_EDITING_ROW,
    EDIT_REMINDER_TEXT,
    REMINDER_DONE,
    CLEAR_DONE_REMINDERS,
    CHANGE_CURRENT_FILTER
} from '../actionTypes';
import { v4 } from 'node-uuid';

const initialState = {
    reminders: [],
    currentFilter: 'ALL'
}

const reminderAdd = (action) => ({
    text: action.result.text,
    id: v4(),
    dueDate: action.result.dueDate
});

const removeByID = (state = [], id) => {
    const reminders = state.filter(r => r.id !== id);
    return reminders;
};

const updateTodoById = (reminderList = [], id, payload, text) => {
    const item = reminderList.find(remainder => remainder.id === id);
    const itemIndex = reminderList.findIndex(remainder => remainder.id === id);
    let updatedItem;
    if(text) {
        delete item.text;
        updatedItem = {text, ...item};
    }
    if(payload) {
        updatedItem = {...item, ...payload};
    }
    const updatedReminderList = [...reminderList];
    updatedReminderList.splice(itemIndex, 1, updatedItem);
    return updatedReminderList;
};

const doneReminder = (reminderList = [], id, payload) => {
    const item = reminderList.find(reminder => reminder.id === id);
    const itemIndex = reminderList.findIndex(reminder => reminder.id === id);
    const updatedItem = {...item, ...payload};
    const updatedReminderList = [...reminderList];
    updatedReminderList.splice(itemIndex, 1, updatedItem);
    return updatedReminderList;
}

const clearDoneReminders = (reminderList = []) => {
    const doneRemindersClearedList = reminderList.filter( (reminder) => reminder.isDone !== true);
    return doneRemindersClearedList;
};

const Reminders = (state = initialState, action) => {
    let { reminders, currentFilter } = state;

    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminderAdd(action)];
            reminders = reminders.sort((r1, r2) => r1.dueDate > r2.dueDate);
            return {reminders};
        case DELETE_REMINDER:
            reminders = removeByID(state, action.result.id);
            reminders = reminders.sort((r1, r2) => r1.dueDate > r2.dueDate);
            return {reminders};
        case CLEAR_REMINDERS:
            reminders = [];
            return {reminders};
        case IS_EDITING_ROW:
            reminders = updateTodoById(state, action.result.id, {isEditing: action.result.isEditing})
            return {reminders};
        case EDIT_REMINDER_TEXT:
            reminders = updateTodoById(state, action.result.id, null, action.result.text)
            return {reminders};
        case REMINDER_DONE:
            reminders = doneReminder(state, action.result.id, {isDone: action.result.isDone});
            return {reminders};
        case CLEAR_DONE_REMINDERS:
            reminders = clearDoneReminders(state);
           return {reminders};
        case CHANGE_CURRENT_FILTER:
            reminders = state;
            currentFilter = action.result.filter;
            return {reminders, currentFilter};
        default:
            return {reminders};
    }
};

export default Reminders;

