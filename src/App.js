import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import DetailProduct from './pages/Detail-Product'
import Product from './pages/Product'
import Category from './pages/Category'
import Complaint from './pages/Complaint'
import Editprofile from './pages/Edit-profile'

import './pages/assetts/styles.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/register" element={<Register/>}/>
          <Route path ="/" element={<Homepage/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/detail-product" element={<DetailProduct/>}/>
          <Route path ='/product' element={<Product/>}/>
          <Route path ="/category" element={<Category/>}/>
          <Route path ="/complaint" element={<Complaint/>}/>
          <Route path ="/edit-profile" element={<Editprofile/>}/>        
        </Routes>
      </BrowserRouter>
  );
}

export default App;