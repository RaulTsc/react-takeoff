import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, IS_EDITING_ROW } from '../constants';

const reminderAdd = (action) => ({
    text: action.text,
    id: Math.random(),
    done: false,
    dueDate: action.dueDate
});

const removeByID = (state = [], id) => {
    const reminders = state.filter(r => r.id !== id);
    return reminders;
};

const editByID = (reminderList = [], id, payload) => {
    const item = reminderList.find(remainder => remainder.id === id);
    const itemIndex = reminderList.findIndex(remainder => remainder.id === id);
  //  const updatedItem = {...item, ...payload}
    const updatedItem = item;
    updatedItem.isEditing = payload.isEditing;
    const updatedReminderList = [...reminderList];
    updatedReminderList.splice(itemIndex, 1, updatedItem);
    console.log('updatedItem', updatedItem);
    return updatedReminderList;
};

const Reminders = (state = [], action) => {
    let reminders = null;
    const savedReminders = localStorage.getItem('remindlist');
    const currentState = savedReminders ? JSON.parse(savedReminders) : [];
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...currentState, reminderAdd(action)];
            reminders = reminders.sort((r1, r2) => r1.dueDate > r2.dueDate);
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        case DELETE_REMINDER:
            reminders = removeByID(currentState, action.id);
            reminders = reminders.sort((r1, r2) => r1.dueDate > r2.dueDate);
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        case IS_EDITING_ROW:
            const updatedReminderList = editByID(currentState, action.result.id, {isEditing: action.result.isEditing})
            localStorage.setItem('remindlist', JSON.stringify(updatedReminderList));
            console.log('current state', currentState, 'updatedReminderList', updatedReminderList);
            return updatedReminderList;           
        default:
            return currentState;
    }
};

export default Reminders;
