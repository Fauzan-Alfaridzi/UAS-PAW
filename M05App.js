import React from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
const M05App = () => {
 return (
 <Routes>
 <Route path="/" element={<Login />} />
 </Routes>
 );
};
export default M05App;