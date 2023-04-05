import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AuthenticationRoutes } from "./authentication.routes"
import { CommonAppRoutes } from "./commonApp.routes";
import { AdmAppRoutes } from "./admApp.routes";

export function Routes(){
    const { user } = useAuth()

    return(
        <BrowserRouter>
            {user ? (user.isAdmin ? <AdmAppRoutes/>: <CommonAppRoutes/>) : <AuthenticationRoutes/>}
        </BrowserRouter>
    )
}