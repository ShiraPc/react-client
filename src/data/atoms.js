import { atom } from 'recoil';
import { loadCustomer } from './customersApi';


// יצירה של אטום - יחידת מידע מסוימת שניתן לשנות אותה מכל קומפוננטה, ולהרשם אליה מכל קומפוננטה
// כל קומפוננטה שתרשם אליה, שינוי של האטום יגרום לקומפוננטה להתעדכן.
export const usersState = atom({
    key: 'usersState',
    default: loadCustomer(),
    // default:[{name: 'John', id: '1233'}, {name: 'dfg', id: '1234'}]
});