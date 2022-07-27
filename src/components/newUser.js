import React, { useState, useRef } from 'react';
// פונקציה שמחזירה רק את פונקצית העדכון - set
import { useRecoilState } from 'recoil';
import { usersState } from '../data/atoms';
import {  useNavigate } from 'react-router-dom';
import { addUser, loadUsers } from '../data/usersApi';

export const NewUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [users, setUsers] = useRecoilState(usersState);
    const formEl = useRef();
    //פונקצית הוספת משתמש
    const addNewUser = async (e) => {
        e.preventDefault();
        const newUser =
        {
            name
        };
        console.log(newUser);
        //לפני קריאות שרת
        // // יכולה לקבל גם פונקציה, שמקבלת כפרמטר את הערך הישן שנמצא באטום, ומחזירה את הערך החדש פונקציה set 
        // // בדוגמא זו הפונקציה יוצרת מערך חדש שמכיל את כל המוצרים מהמערך הקודם, בתוספת המוצר החדש
        // setTasks((oldTasksArray) => [...oldTasksArray, {...newTask, id: oldTasksArray.length + 1}]);
        formEl.current.reset();
        setName('');
        //אחרי קריאות שרת
        //עובד הוספת משימה חדשה ב"ה
        await addUser(newUser).then(() => {
            loadUsers().then((data) => {
                setUsers([...data]);
            });
        });
        navigate('/user');  // ניווט חזרה למשימות
    }
   
    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={addNewUser} ref={formEl}>
        <h3>Add User</h3>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /> <br />

        <button type="submit">Add User</button>
    </form>
}