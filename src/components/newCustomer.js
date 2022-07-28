import React, { useState, useRef, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { CustomerContext } from '../context/customer.context';
import {  useNavigate } from 'react-router-dom';
import { addCustomer } from '../data/customersApi';

export const NewCustomer = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { addCustomer } = useContext(CustomerContext);

    //const [users, setUsers] = useRecoilState(usersState);
    const formEl = useRef();
    //פונקצית הוספת משתמש
    const addNewCustomer = async (e) => {
        e.preventDefault();
        const customer =
        {
            "user":{
                username,
                password
            }
        };
        // const newUser = {
        //     user
        // };
        // const UserToAdd = {
        //     newUser
        // }
        // let o = new Object(newUser);
        console.log(customer);

        formEl.current.reset();
        setUserName('');
        setPassword('');

        const c =  await addCustomer(customer);
        console.log(c);
        addCustomer(c);
        // .then(() => {
        //     loadUsers().then((data) => {
        //         setUsers([...data]);
        //     });
        // })
        // navigate('/user');  // ניווט חזרה למשימות
    }
   
    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={addNewCustomer} ref={formEl}>
        <h3>Add Customer</h3>
        <input type="text" placeholder="username" value={username} onChange={e => setUserName(e.target.value)} /> <br />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit">Add Customer</button>
    </form>
}