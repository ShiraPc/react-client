import { async } from 'q';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadBuisness, UpdateBusiness } from '../data/buisnessApi';

export const Business = async()=>{
    const navigate = useNavigate();
    const business = await loadBuisness();

    useEffect(() => {
        if (!business) {
            console.log('no business found');
            navigate('/addBusiness');  
        }
        else {
            setownersName(business.ownersName);
            setbusinessName(business.businessName);
            // setDone(task.done);
        }
    }, [id, business]);
        let idu;
        if (business)
            idu = business.id;
        const save = async (event) => {
            console.log("save");
            event.preventDefault();
            const newbusiness =
            {
                business: {
                    ownersName,
                    businessName
                }
            };
            console.log(newbusiness);
            // await Updatecustomer(idu, newCustomer);
            navigate('/addBusiness'); // ניווט חזרה למשימות
        }
    const show = async () => {
        await loadBuisness();
    }
    return customer ?
        <form onSubmit={save}>
            <label>id:
                <h5>{business.id}</h5>
            </label>
            <label>ownersName:
                <input type="text" value={ownersName} placeholder={ownersName} onChange={e => setownersName(e.target.value)} /> <br />
            </label>
            <br />
            <label>businessName:
                <input type="text" value={businessName} placeholder={businessName} onChange={e => setbusinessName(e.target.value)} /> <br />
            </label>
            <button type="submit">save</button>
            <br /><br />
            <button onClick={() => UpdateBusiness(business.id, business)}>Update</button>
        </form> : ' ';
}