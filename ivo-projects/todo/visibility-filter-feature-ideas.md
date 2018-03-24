1. Have a prop in state called currentFilter

2. It must have 2 possible values:all, completed

3. Binded to select 

4. event handler call action 

5. action : CHANGE_CURRENT_FILTER 

6. in case-ul din switch schimb proprietatea 

7. componenta reactioneaza la noul state

8. in ReminderList pasez currentFilter(string din reducer: all sau completed) 

9. const items = (array de itemuri)

const completedItems = items.filter(x => x.isCompleted())

Afisezi completedItems if currentFilter == COMPLETED

Afisezi allItems if currentFilter == ALL
