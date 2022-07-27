import { atom } from 'recoil';
// import { tasks } from './tasks';
import { loadTasks } from './api';


// יצירה של אטום - יחידת מידע מסוימת שניתן לשנות אותה מכל קומפוננטה, ולהרשם אליה מכל קומפוננטה
// כל קומפוננטה שתרשם אליה, שינוי של האטום יגרום לקומפוננטה להתעדכן.
export const tasksState = atom({
    key: 'tasksState',
    default: loadTasks(),
});