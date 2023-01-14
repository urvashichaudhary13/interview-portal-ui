import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup  } from "./pages";

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
