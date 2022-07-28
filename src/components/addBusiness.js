import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '../data/atoms';
import {  useNavigate } from 'react-router-dom';
import { addBusiness } from '../data/buisnessApi';

export const addBusiness = () => {
    const navigate = useNavigate();
    const [ownersName, setownersName] = useState('');
    const [businessName, setbusinessName] = useState('');

    const formEl = useRef();
    //add business
    const addBusiness = async (e) => {
        e.preventDefault();
        const business =
        {
            "userId":"25e9c763-cac9-41ff-b0dc-aa15dfef5327",
            "business":{
                "ownersName": "Esti&Shira",
                "businessName": "hair style",
                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEV8Evzb1J5Pw4HIUzgm1pnbXOJfziG-xAg&usqp=CAU"
             }
        };
       console.log(business);

        formEl.current.reset();
        setownersName('');
        setbusinessName('');

        await addBusiness(business);
 
    }
   
    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={addNewUser} ref={formEl}>
        <h3>Add Business</h3>
        <input type="text" value={ownersName} onChange={e => setownersName(e.target.value)} /> <br />
        <input type="text" value={businessName} onChange={e => setbusinessName(e.target.value)} /> <br />
        <button type="submit">Add Business</button>
    </form>
}