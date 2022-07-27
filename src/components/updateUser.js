import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '../data/atoms';
import { useNavigate } from 'react-router-dom';
import { UpdateUser , loadUsers } from '../data/usersApi';

export const updateUser = async (id, user) => {
    const navigate = useNavigate();
    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState(user.password);
    const [users, setUsers] = useRecoilState(usersState);
    const userToUpdate = users.find(user => user.id === id);
    userToUpdate.name = name;
    userToUpdate.password = password;
    const formEl = useRef();

    formEl.current.reset();
    console.log(userToUpdate);
    //אחרי קריאות שרת
    //עובד הוספת משימה חדשה ב"ה
    await UpdateUser(user).then(() => {
        loadUsers().then((data) => {
            setUsers([...data]);
        });
    });
    navigate('/user');  // ניווט חזרה למשימות

    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={updateUser} ref={formEl}>
        <h3>Update User</h3>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /> <br />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit">Update User</button>
    </form>
}