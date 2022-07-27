import React, { useEffect, useState, useContext, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { usersState } from '../data/atoms';
import { loadUsers, UpdateUser, loadUser } from '../data/usersApi';

export const User = () => {
    const { userId } = useParams();
    console.log(userId);
    const [users, setUsers] = useRecoilState(usersState);
    const navigate = useNavigate();
    const user = users.find(u => u.id === (parseInt(userId)));
    console.log(user);
    const [name, setName] = useState(user?.name);
    // const [done, setDone] = useState(task?.done);
    //  שמספר המשימות יהיו משהו גלובלי
    // const [count,setCount] = useRecoilState(countState);
    // setCount(count);
    //  הפונקציה תרוץ רק כאשר משתנה אחד הפרמטרים במערך שנשלח
    useEffect(() => {
        if (!user) {
            console.log('no users');
            navigate('/users');  // דוגמא לניווט ע"י קוד
        }
        else {
            setName(user.name);
            // setDone(task.done);
        }
    }, [userId, user]);
    useEffect(() => {
        console.log('run after every state or prop change');
    });
    useEffect(() => {
        console.log('call once at the first render');
    }, []);

    const arr = [...users];
    console.log(arr);
    let id;
    if (user)
        id = user.id;

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
        const newUser =
        {
            id,
            name,
            // done,
        };
        console.log(newUser);
        //לפני קריאות שרת
        // setName('');
        // let newCount=count+1;
        // setCount(newCount);

        //אחרי קריאות שרת
        //עובד עדכון משימה ב"ה
        await UpdateUser(id, newUser).then(()=>{
            loadUsers().then((data)=>{
              setUsers([...data]);  
            });
           });
      
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


    return user ?
        <form onSubmit={save}>
            <label>id:
                <h5>{user.id}</h5>
            </label>
            <label>name:
                <input type="text" value={name} placeholder={name} onChange={e => setName(e.target.value)} /> <br />
            </label>
            <br />
            {/* <label> doing? <input type="checkbox" checked={done} onChange={a => setDone(Boolean(a.target.value))} ></input></label> */}
            <br />
            <button type="submit">שמור</button>
            <br /><br />
            <button onClick={() => UpdateUser(user)}>Update</button>
        </form> : ' ';

}