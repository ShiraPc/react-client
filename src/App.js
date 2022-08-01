import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Customer } from "./components/customer";
import { Admin } from "./components/admin";
import { Menu } from "./components/menu";
import { SignIn } from "./components/signIn";
import { NewCustomer } from "./components/newCustomer";
//import { UpdateCustomer } from "./components/updateCustomer";
import  {AddBusiness } from "./components/addBusiness";
import { Business } from "./components/business";
function App() {
  return (
    <RecoilRoot>
    <div className="App">
      {/* <React.Suspense fallback={<p> failed </p>}>  */}
      <Menu />
      <div>
        <Routes>
          <Route exact path="/user" element={<Admin />}>
              <Route exact path="showCustomer/:id" element={<Customer/>} />
              <Route exact path="newCustomer" element={< NewCustomer />} />
              {/* <Route exact path=":id" element={< UpdateCustomer />} /> */}
          </Route>
             <Route path="signIn" element={<SignIn />} />
          <Route exact path="/Business" element={<Business />} >
                 <Route exact path="addBusiness" element={<AddBusiness />} />
          </Route>
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </div>
      {/* </React.Suspense> */}
    </div>
    </RecoilRoot>
  );
}
export default App;