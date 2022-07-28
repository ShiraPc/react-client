import logo from './logo.svg';
import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { User } from "./components/users";

function App() {
  return (
    <RecoilRoot>
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
      </div>
      {/* </React.Suspense> */}
   
    </RecoilRoot>
  );
}

export default App;
