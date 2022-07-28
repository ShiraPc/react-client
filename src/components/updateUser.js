import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { CustomerContext } from '../context/customer.context';
import { useNavigate } from 'react-router-dom';
import { Updatecustomer , loadCustomer } from '../data/usersApi';

export const UpdateCustomer = (id, customer) => {
    const navigate = useNavigate();
    const [name, setName] = useState(customer.name);
    const [password, setPassword] = useState(customer.password);
    const { Customer } = useContext(CustomerContext);

    Customer.name = name;
    Customer.password = password;

    const formEl = useRef();

    formEl.current.reset();
    console.log(userToUpdate);

    const Update= async()=>{
        await Updatecustomer(user);
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
    return <form onSubmit={UpdateUser} ref={formEl}>
        <h3>Update User</h3>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /> <br />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit">Update User</button>
    </form>
}