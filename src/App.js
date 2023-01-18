import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, HomePage, Feedback  } from "./pages";

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
