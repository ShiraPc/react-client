import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '../data/atoms';
import {  useNavigate } from 'react-router-dom';
import { addUser } from '../data/usersApi';

export const NewUser = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useRecoilState(usersState);
    const formEl = useRef();
    //פונקצית הוספת משתמש
    const addNewUser = async (e) => {
        e.preventDefault();
        const user =
        {
            username,
            password
        };
        const newUser = {
            user
        };
        // const UserToAdd = {
        //     newUser
        // }
        let o = new Object(newUser);
        console.log(o);

        formEl.current.reset();
        setUserName('');
        setPassword('');

        await addUser(o);
        // .then(() => {
        //     loadUsers().then((data) => {
        //         setUsers([...data]);
        //     });
        // })
        // navigate('/user');  // ניווט חזרה למשימות
    }
   
    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={addNewUser} ref={formEl}>
        <h3>Add User</h3>
        <input type="text" placeholder="username" value={username} onChange={e => setUserName(e.target.value)} /> <br />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit">Add User</button>
    </form>
}