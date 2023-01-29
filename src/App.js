import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, HomePage } from "./pages";

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
