import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Admin/Home";
import { DishView } from "../pages/Admin/DishView";
import { Favorites } from "../pages/Admin/Favorites";
import { Menu } from "../pages/Admin/Menu"
import { NewDish } from "../pages/Admin/NewDish";
import { EditDish } from "../pages/Admin/EditDish";
import { Orders } from "../pages/Admin/Orders";

export function AdmAppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dish_view/:id" element={<DishView/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/new_dish" element={<NewDish/>}/>
            <Route path="/edit_dish/:id" element={<EditDish/>}/>
            <Route path="/orders" element={<Orders/>}/>
        </Routes>
    )
}