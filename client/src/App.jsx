import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Posts from './pages/Posts'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost/>} />
          </Route>
          <Route path='/posts' element={<Posts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
