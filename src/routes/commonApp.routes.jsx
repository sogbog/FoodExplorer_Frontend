import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/CommonUser/Home";
import { Menu } from "../pages/CommonUser/Menu";
import { DishView } from "../pages/CommonUser/DishView";
import { PayOut } from "../pages/CommonUser/PayOut";
import { PayOutMobile } from "../pages/CommonUser/PayoutMobile";
import { History } from "../pages/CommonUser/History";
import { Favorites } from "../pages/CommonUser/Favorites";

export function CommonAppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/dish_view/:id" element={<DishView/>}/>
            <Route path="/payout" element={<PayOut/>}/>
            <Route path="/payout_mbl" element={<PayOutMobile/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    )
}