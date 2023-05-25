import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import MenuAppBar from './Components/MenuAppBar';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Rigister from './Components/Rigister';
import Home from './Components/Home';

import Device from './Device/Device';
import LoginOptions from './Components/LoginOptions';
import Admin from './Components/AdminLogin';
import Doctor from './Components/Doctor';
import Employee from './Components/Employee';
import List from './Components/List';
import ViewData from './ViewData';
import AdminLogin from './AdminModule/Admin';
import SelectEx from './SelectEx';

import RigisterDemo from './Components/RigisterDemo';


function App() {
  return (
    <div className="App">
       <NavBar/>
    
    <div disply="flex">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Rigister" element={<Rigister></Rigister>}></Route>
        <Route path="/login" element={<Admin></Admin>}></Route>
        <Route path="/doctorlogin" element={<Doctor></Doctor>}></Route>
        <Route path="/employeelogin" element={<Employee></Employee>}></Route>
        <Route path="/Device" element={<Device></Device>}></Route>
        <Route path="/loginoptions" element={<LoginOptions></LoginOptions>}></Route>
        <Route path="/viewdata" element={<ViewData></ViewData>}></Route>
        <Route path="/Admin" element={<Admin></Admin>}></Route>
       

        
      </Routes>
      

    
     </div>
 
 
     
    </div>
  );
}

export default App;
