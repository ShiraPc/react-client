import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { usersState } from '../data/atoms';
import { Updatecustomer, loadCustomer } from '../data/customersApi';
export const Customer = () => {
    const { id } = useParams();
    // const location = useLocation();
    // const form = location.state;
    // console.log(form.id);
    // const [users, setUsers] = useRecoilState(usersState);
    const navigate = useNavigate();
    let customer;
    const loadcustomer = async () => {
        customer = await loadCustomer(id);
    }
    const [username, setName] = useState(customer?.username);
    const [password, setPassword] = useState(customer?.password);
    useEffect(() => {
        if (!customer) {
            console.log('no user');
            navigate('/user');  // דוגמא לניווט ע"י קוד
        }
        else {
            setName(customer.username);
            setPassword(customer.password);
            // setDone(task.done);
        }
    }, [id, customer]);
        //  הפונקציה תרוץ רק כאשר משתנה אחד הפרמטרים במערך שנשלח
        let idu;
        if (customer)
            idu = customer.id;
        const save = async (event) => {
            console.log("save");
            event.preventDefault();
            const newCustomer =
            {
                user: {
                    username,
                    password
                }
            };
            console.log(newCustomer);
            // await Updatecustomer(idu, newCustomer);
            navigate('/user'); // ניווט חזרה למשימות
        }
    const show = async () => {
        await loadcustomer();
    }
    return customer ?
        <form onSubmit={save}>
            <label>id:
                <h5>{customer.id}</h5>
            </label>
            <label>name:
                <input type="text" value={username} placeholder={username} onChange={e => setName(e.target.value)} /> <br />
            </label>
            <br />
            <label>password:
                <input type="text" value={password} placeholder={password} onChange={e => setPassword(e.target.value)} /> <br />
            </label>
            <button type="submit">שמור</button>
            <br /><br />
            <button onClick={() => Updatecustomer(customer.id, customer)}>Update</button>
        </form> : ' ';
}