import ReactDom from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './view/Home/Home'
import Login from './view/Login/Login'
import SignUp from './view/SignUp/SignUp'
import Order from './view/Order/Order';
import BuyProduct from './view/BuyProduct/BuyProduct';

const root = ReactDom.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path : '/',
        element :<Home/>
    },
    {
        path : '/login',
        element :<Login/>
    },
    {
        path : '/signup',
        element :<SignUp/>
    },
    {
        path : '/orders',
        element :<Order/>
    },
    {
        path : '/buy/:_id',
        element :<BuyProduct/>
    }
])
root.render(
  <RouterProvider router= {router} />
)