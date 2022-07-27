import { atom } from 'recoil';
// import { tasks } from './tasks';
import { loadUsers } from './usersApi';


// יצירה של אטום - יחידת מידע מסוימת שניתן לשנות אותה מכל קומפוננטה, ולהרשם אליה מכל קומפוננטה
// כל קומפוננטה שתרשם אליה, שינוי של האטום יגרום לקומפוננטה להתעדכן.
export const usersState = atom({
    key: 'usersState',
    default: loadUsers(),
});