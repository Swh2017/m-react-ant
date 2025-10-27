import {createHashRouter} from "react-router-dom"
import Home from "../view/home";

const Router = createHashRouter([{
    path: '/home',
    component: Home,
}])

export default Router
