import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
<<<<<<< HEAD
import { User } from "./components/users";
=======
import { User } from "./components/user";
import { Users } from "./components/users";
import { Menu } from "./components/menu";
import { SignIn } from "./components/signIn";
import { Admin } from "./components/admin";
import { NewUser } from "./components/newUser";
import { UpdateUser } from "./components/updateUser";
>>>>>>> 1d3f3996a5c30c4c4581426399ef05ae6606e8b1

function App() {
  return (
    <RecoilRoot>
<<<<<<< HEAD
      <div className="App">
      <React.Suspense fallback={<p> failed </p>}> 
        <Menu />
        <div>
          {/* בתוך הקומפוננטה Routes 
          זה המקום להגדיר את הגדרות הניתוב
        */}

          <Routes>
            <Route path="" element={<h1>my diary</h1>} />
            <Route path="/user" element={<AddUser />}>
            <Route path=":getid" element={<User />} />
              <Route path=":id" element={< UpdateUser />} />
            </Route>
            <Route path="*" element={<h1> A mistake </h1>} />
          </Routes>
        </div>
        </React.Suspense>
=======
    <div className="App">
      {/* <React.Suspense fallback={<p> failed </p>}>  */}
      <Menu />
      <div>
        <Routes>
          <Route exact path="/user" element={<Users />}>
              <Route exact path="showUser" element={<User/>} />
              <Route exact path="admin" element={<Admin />} />
              <Route exact path="newUser" element={< NewUser />} /> 
             {/* <Route exact path=":id" element={< UpdateUser />} />  */}
             </Route>
             <Route path="signIn" element={<SignIn />} />
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
>>>>>>> 1d3f3996a5c30c4c4581426399ef05ae6606e8b1
      </div>
      {/* </React.Suspense> */}
   
    </RecoilRoot>
  );
}

export default App;
