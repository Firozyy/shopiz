import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/ui/auth/layout";
import { Register } from "./pages/auth/Register";
import Login from "./pages/auth/Login";
const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>header compenet</h1>
      <Routes>
        <Route path="/auth" element={<Authlayout/>}>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        </Route>
         
      
      </Routes>
    </div>
  );
};

<Authlayout/>

export default App;
