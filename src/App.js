
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Breakfast from './Components/Foods/Breakfast/Breakfast';
import Dinner from './Components/Foods/Dinner/Dinner';
import Lunch from './Components/Foods/Lunch/Lunch';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import Registar from './Components/Registar/Registar';
import RequireAuth from './Components/RequiredAuth/RequiredAuth';
export const CartContext = createContext([]);
function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route path='/' element={<Breakfast></Breakfast>}></Route>
            <Route index path='/breakfast' element={<Breakfast></Breakfast>}></Route>
            <Route path='/lunch' element={<Lunch></Lunch>}></Route>
            <Route path='/dinner' element={<Dinner></Dinner>}></Route>
          </Route>
          {/* <Route path='/' element={<Home></Home>}></Route> */}
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registar' element={<Registar></Registar>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/carts' element={<Cart></Cart>}></Route>

          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>

        </Routes>
      </div>
    </CartContext.Provider>

  );
}

export default App;
