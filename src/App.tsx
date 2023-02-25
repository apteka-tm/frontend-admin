import React from "react";
import {Route, Routes} from "react-router";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
