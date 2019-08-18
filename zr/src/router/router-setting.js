import Home from "../views/Home/Home";
import Classify from "../views/Classify/Classify";
import ShoppingTrolley from "../views/Shopping-trolley/ShoppingTrolley";
import My from "../views/My/My";

const routes = [
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Classify',
        component: Classify
    },
    {
        path: '/ShoppingTrolley',
        component: ShoppingTrolley
    },
    {
        path: '/My',
        component: My
    },

    {
        path:'/',
        redirect:'/Classify'
    }

]
export default routes