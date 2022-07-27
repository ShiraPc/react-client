import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { User } from "./components/user";
import { Users } from "./components/users";
import { Menu } from "./components/menu";
import { SignIn } from "./components/signIn";
import { Admin } from "./components/admin";
import { NewUser } from "./components/newUser";
import { UpdateUser } from "./components/updateUser";

function App() {
  return (
    <RecoilRoot>
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
      </div>
      {/* </React.Suspense> */}
    </div>
    </RecoilRoot>
  );
}

export default App;
