import React, { useState, useRef, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { CustomerContext } from '../context/customer.context';
import { useNavigate } from 'react-router-dom';
import { Updatecustomer , loadCustomer } from '../data/customersApi';

export const UpdateCustomer = (id, c) => {
    const navigate = useNavigate();
    const [name, setName] = useState(c.name);
    const [password, setPassword] = useState(c.password);
    const { Customer } = useContext(CustomerContext);
    const customer = Customer(parseInt(id));

    customer.name = name;
    customer.password = password;

    const formEl = useRef();

    formEl.current.reset();
    console.log(customer);

    const Update= async()=>{
        await Updatecustomer(customer.id, customer);
        // .then(() => {
        //     loadUsers().then((data) => {
        //         setUsers([...data]);
        //     });
        // })
    }
    //אחרי קריאות שרת
    //עובד הוספת משימה חדשה ב"ה
 
    navigate('/user');  // ניווט חזרה למשימות

    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={Update} ref={formEl}>
        <h3>Update Customer</h3>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /> <br />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit">Update Customer</button>
    </form>
}