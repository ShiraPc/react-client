import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { usersState } from '../data/atoms';
// import { loadUsers, UpdateUser, loadUser } from '../data/usersApi';


export const SignIn = () => {

    const [name, setName] = useState("");
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    const save = async (event) => {
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
        const User =
        {
            id,
            name,
            // done,
        };
        //לפני קריאות שרת
        // setName('');
        // let newCount=count+1;
        // setCount(newCount);      
    }
    const passwordManager = "2468";
    const CheckValid = (id, name) => {
        if (id === passwordManager && name === "Shira&esti")
            navigate('/user/admin');
        else
            alert('you cant goto manage page');
    };
    return(
    <form onSubmit={save}>
        <label>
            <input type="text" id="password" name="password" type="password" placeholder={"password"} onChange={e => setId(e.target.value)} />
        </label>
        <label>
            <input type="text" placeholder={"name"} onChange={e => setName(e.target.value)} /> <br />
        </label>
        <br />
        {/* <label> doing? <input type="checkbox" checked={done} onChange={a => setDone(Boolean(a.target.value))} ></input></label> */}
        <br />
        <button onClick={() => CheckValid(id, name)} type="submit">שמור</button>
        <br /><br />
        {/* <button }>Update</button> */}
    </form>
    );
}