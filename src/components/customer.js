import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { usersState } from '../data/atoms';
import { Updatecustomer , loadCustomer  } from '../data/customersApi';

export const Customer = async (props) => {
    // const { userId } = useParams();
    const location = useLocation();
    const form = location.state;
    console.log(form.id);
    // const [users, setUsers] = useRecoilState(usersState);
    const navigate = useNavigate();
    const customer = await loadCustomer(form.id);
    // const user = {name:"iih", id:userId};
    console.log(customer);
    const [name, setName] = useState(customer?.name);
    const [password, setPassword] = useState(customer?.password);
    // const [done, setDone] = useState(task?.done);
    //  שמספר המשימות יהיו משהו גלובלי
    // const [count,setCount] = useRecoilState(countState);
    // setCount(count);
    //  הפונקציה תרוץ רק כאשר משתנה אחד הפרמטרים במערך שנשלח
    useEffect(() => {
        if (!customer) {
            console.log('no user');
            navigate('/user');  // דוגמא לניווט ע"י קוד
        }
        else {
            setName(customer.name);
            setPassword(customer.password);
            // setDone(task.done);
        }
    }, [form.id, customer]);

    // const arr = [...users];
    // console.log(arr);
    let id;
    if (customer)
        id = customer.id;

    const save = async(event) => {
        console.log("save");
        //לפני קריאות שרת
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i].id === parseInt(userId)) {
        //         arr[i]={
        //             id,
        //             name,
        //             done
        //         }
        //     }
        // }
        // setTasks(arr);
        // setName('');
        // let newCount=count+1;
        // setCount(newCount);
        // console.log(arr);
        //
        event.preventDefault();
        const newCustomer =
        {
            user:{
                name,
                password
            }
            // done,
        };
        console.log(newCustomer);
        //לפני קריאות שרת
        // setName('');
        // let newCount=count+1;
        // setCount(newCount);

        //אחרי קריאות שרת
        //עובד עדכון משימה ב"ה
        await Updatecustomer(id, newCustomer);
        // .then(()=>{
        //     loadUsers().then((data)=>{
        //       setUsers([...data]);  
        //     });
        //    });
      
        navigate('/user'); // ניווט חזרה למשימות
    }

    // const deleteTask =  (task) => {
    //     //לפני קריאות שרת
    //     // console.log(task);
    //     // const arrAfter=tasks.filter(m=>m.id!==id); //במקום למחוק איבר ממערך לוקחים את האחרים חוץ ממנו
    //     // setTasks(arrAfter);
    //     // setCount()
    //     //אחרי קריאות שרת
    //      //עובד מחיקת משימה אחת ב"ה 
    //       DeleteTask(task.id).
    //      then(()=>{
    //         loadTasks().then((data)=>{
    //           setTasks([...data]);  
    //         });
    //        });
        
    //     navigate('/tasks'); // ניווט חזרה למשימות
    // }


    return customer ?
        <form onSubmit={save}>
            <label>id:
                <h5>{customer.id}</h5>
            </label>
            <label>name:
                <input type="text" value={name} placeholder={name} onChange={e => setName(e.target.value)} /> <br />
            </label>
            <br />
            <label>password:
                <input type="text" value={password} placeholder={password} onChange={e => setPassword(e.target.value)}/> <br />
            </label>
            <button type="submit">שמור</button>
            <br /><br />
            <button onClick={() => Updatecustomer(customer.id, customer)}>Update</button>
        </form> : ' ';

}