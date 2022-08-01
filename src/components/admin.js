import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from 'recoil';
// import { usersState } from '../data/atoms.js';
// import { CustomerContext } from '../context/customer.context';

export const Admin = () => {
//   const [users, setUsers] = useRecoilState(usersState);
  const [id, setId] = useState(null);
  


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
      <br /><br />
      <button> <Link to="newCustomer">Add Customer</Link></button>
      <button> <Link to={`showCustomer/${id}`}>show Customer</Link></button>
      <input type="text" name="userid" placeholder="Enter your id" onChange={e => setId(e.target.value)} />
      {/* <button> <Link to="${id}">Update Customer</Link></button> */}
      <button><Link to="/business/addBusiness">Add Business</Link></button>
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
    }