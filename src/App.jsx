import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import ContactUs from './pages/Contact'
import About from './pages/About'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'
import ProductDetails from './pages/ProductDetails'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './components/DashboardLayout'
import Courses from './components/Courses'
import Settings from './components/Settings'
import Effect from './pages/Effect'
import MakeRequest from './pages/MakeRequest'
import FomikForm from './pages/FomikForm'
import Product from './pages/Product'
import ProductPage from './pages/ProductPage'
import ClassReact from './components/ClassReact'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Ref from './pages/Ref'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage title="Emmanuel"/>}/>
        <Route path='home' element={<Navigate to="/"/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='about-us' element={<Navigate to="/about"/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='signup' element={<SignUp/>} />
        <Route path='effect' element={<Effect/>}/>
        <Route path='make-request' element={<MakeRequest/>}/>
        <Route path='formik' element={<FomikForm/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='product-page' element={<ProductPage/>}/>
        <Route path='class' element={<ClassReact title="Elizabeth"/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='ref' element={<Ref/>}/>

        {/* Dynamic Route */}
        <Route path='product-details/:id' element={<ProductDetails/>} />

        {/* Nested Routes */}

        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>


        {/* <Route path='dashboard' element={<Dashboard/>} /> */}


        {/* Wildcard Route */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App