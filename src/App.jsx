import React from "react"
import './styles/global.css'
import Home from "./pages/home"
import Login from "./pages/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/register"
import Otp from "./pages/otp"
import Account from "./pages/account"
import Payment from "./components/payment"
import About from "./pages/about"
import FeedBack from "./pages/feed_back"



function App() {

  
  
  return (
    <>
      <div>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="about/login" element={ <Login /> } />
            <Route path="about/register" element={ <Register /> } />

            <Route path="/feed" element={ <FeedBack /> } />
            <Route path="feed/login" element={ <Login /> } />
            <Route path="feed/register" element={ <Register /> } />


            <Route path="/register" element={ <Register /> } />
            <Route path="register/code" element={ <Otp /> } />

            <Route path="/login" element={ <Login /> } />
            <Route path="/login/code" element={ <Otp /> } />

            <Route path="/login/code/account" element={ <Account /> } />
            <Route path="/register/code/account" element={ <Account /> } />
            <Route path="/login/account" element={ <Account /> } />
            <Route path="/payment" element={ <Payment /> } />
            <Route path="/payment/account" element={ <Account /> } />
            <Route path="/account" element={ <Account /> } />

          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
