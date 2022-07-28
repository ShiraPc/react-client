import axios from 'axios';

//קבלת כל המשתמשים-v
// export const loadUsers = async () => 
// {
//     try {
//         const { users } = await axios.get('https://meetings-test.herokuapp.com/user');
//         return users;
//     } 
//     catch (error) {
//         console.log('error in get users');}
// }

//קבלת משתמש
export const loadCustomer = async (id) => 
{
    try {
        const { user } = await axios.get('https://meetings-test.herokuapp.com/user/${id}');
        return user;
    } 
    catch (error) {
        console.log('error in get user');}
}

//הוספת משתמש-v
export const addCustomer = async (user) => 
{
    try {
        return await axios.post('https://meetings-test.herokuapp.com/user/',user);} 
    catch (error){
        console.log('error in add user');}
}

//עדכון משתמש-v
export const Updatecustomer = async (id, user) => 
{
    try {
        return await axios.put('https://meetings-test.herokuapp.com/user'+id,user);} 
    catch (error){
        console.log('error in put user');}
}