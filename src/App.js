
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Components/Foods/Breakfast/Breakfast';
import Dinner from './Components/Foods/Dinner/Dinner';
import Lunch from './Components/Foods/Lunch/Lunch';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Breakfast></Breakfast>}></Route>
          <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
