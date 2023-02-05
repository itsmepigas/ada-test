import { Routes, Route } from "react-router-dom";

import { Cards } from "./pages/Cards";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Cards />}/>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}