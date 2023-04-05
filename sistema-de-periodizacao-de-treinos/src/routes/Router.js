import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import RegisterPage from "../pages/registerPage/registerPage";
import AssemblyPage from "../pages/assemblyPage/assemblyPage";
import TrainingPage from "../pages/trainingPage/trainingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/assembly" element={<AssemblyPage/>}/>
        <Route path="/training" element={<TrainingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
