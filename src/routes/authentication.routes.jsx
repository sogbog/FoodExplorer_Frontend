import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthenticationRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
    )
}