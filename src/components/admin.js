import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from 'recoil';
// import { usersState } from '../data/atoms.js';
import { CustomerContext } from '../context/customer.context';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
//   const [users, setUsers] = useRecoilState(usersState);
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const ShowUser = (id) => {
    navigate('showUser', {state:{id: id}});
  }
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
      <button onClick={ShowUser(id)}>show user</button>
      <input type="text" name="userid" placeholder="Enter your id" onChange={e => setId(e.target.value)} />
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