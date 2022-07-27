import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { usersState } from '../data/atoms.js';

export const Users = () => {
  const [users,setUsers] = useRecoilState(usersState);
  console.log(users);
  const [usersAfter, SetUsersAfter] = useState(users);
//   const [tasksFilter, SetTasksFilter] = useState(tasks);

  //מחיקת משימות שנעשו
  // const deleteALL = async () => {
  //   //לפני קריאות שרת
  //   // const tasksAfterDone=tasks.filter(m=>m.done==false);
  //   // setTasks(tasksAfterDone);
  //   // SetTasksAfter(tasksAfterDone);
  //   // SetCount(count-(num-tasksAfterDone.length));

  //   //אחרי קריאות שרת
  //   try {
  //    //  עובד מחיקה של משימות שנעשו ב"ה
  //    await DeleteTasks().then(()=>{
  //     loadTasks().then((data)=>{
  //       setTasks([...data]);  
  //     });
  //    });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    console.log('useEffect');
    SetUsersAfter(users);
},[users]);

//   useEffect(() => {
//     switch (tasksFilter) {
//       case "all": SetTasksAfter(tasks);
//         break;
//       case "done": SetTasksAfter(tasks.filter(f => f.done === true));
//         break;
//       case "not_done": SetTasksAfter(tasks.filter(z => z.done === false));
//         break;
//     }
//   }, [tasks, tasksFilter])

  return (
    <div>
      {/* <select onChange={(event) => SetTasksFilter(event.target.value)}>
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="not_done">not done</option>
      </select> */}
      <br /><br />
      <button> <Link to="newUser">Add User</Link></button>
      <button> <Link to="showUser">Show User</Link></button>
      <button> <Link to="updateUser">Update User</Link></button>
      <br />
      {/* <button onClick={deleteALL}>delete done</button> */}
      {/* <ul>
        {usersAfter.map((u) => (
          <li key={u.id}>
            {" "}
            <Link to={`/user/${u.id}`}> {u.name} </Link>{" "}
          </li>
        ))}
      </ul> */}
      <Outlet />
    </div>
  );
};