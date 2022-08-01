import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '../data/atoms';
import {  useNavigate } from 'react-router-dom';
import { addBusiness } from '../data/buisnessApi';

export const AddBusiness = () => {
    const navigate = useNavigate();
    const [ownersName, setownersName] = useState('');
    const [businessName, setbusinessName] = useState('');
    const formEl = useRef();
    //add business
    const addBusiness = async (e) => {
        try{
        e.preventDefault();
        const business =
        {
            "userId":"25e9c763-cac9-41ff-b0dc-aa15dfef5327",
            "business":{
                "ownersName": "Esti&Shira",
                "businessName": "hair style",
                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEV8Evzb1J5Pw4HIUzgm1pnbXOJfziG-xAg&usqp=CAU",
                "services":[
                    {
                        "serviceName":"coloring",
                        "numOfMeetings":4,
                        "durationOfMeeting":"45 miniutes",
                        "cost":"200$",
                        "OpeningHours":"10:00-20:00",
                        "address":{
                            "city":"Tiberias",
                            "street":"rimon",
                            "number":5
                        }
                    },
                    {
                        "serviceName":"haircut",
                        "numOfMeetings":7,
                        "durationOfMeeting":"60 miniutes",
                        "cost":"300$",
                        "OpeningHours":"10:00-20:00",
                        "address":{
                            "city":"Tiberias",
                            "street":"rimon",
                            "number":5
                        }
                    },{
                        "serviceName":"hairstyles",
                        "numOfMeetings":10,
                        "durationOfMeeting":"45 miniutes",
                        "cost":"500$",
                        "OpeningHours":"10:00-20:00",
                        "address":{
                            "city":"Tiberias",
                            "street":"rimon",
                            "number":5
                        }
                    },{
                        "serviceName":"panes",
                        "numOfMeetings":8,
                        "durationOfMeeting":"1 hour",
                        "cost":"400$",
                        "OpeningHours":"10:00-20:00",
                        "address":{
                            "city":"Tiberias",
                            "street":"rimon",
                            "number":5
                    }
                }
                ]
             }
        };
       console.log(business);

        formEl.current.reset();
        setownersName('');
        setbusinessName('');

        const a=await addBusiness(business);
        console.log(a);
        return {business};
    }
    catch (err) {
        return {error: err};
    }
    }
   

    return <form onSubmit={addBusiness} ref={formEl}>
        <h3>Add Business</h3>
        <input type="text" value={ownersName} onChange={e => setownersName(e.target.value)} /> <br />
        <input type="text" value={businessName} onChange={e => setbusinessName(e.target.value)} /> <br />
        <button type="submit">Add Business</button>
    </form>
}