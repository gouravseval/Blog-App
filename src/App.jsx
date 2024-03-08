import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './App.css'
import authService from "../src/Appwrite/auth_services"
import { login, logout } from "./features/authSlice"
import {Header , Footer} from "./components/index"
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Loader from './components/Loader'


function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    authService.GetCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return !loading ? 
  (
    <div className='main'>
      <Header/>
      <Suspense fallback={<Loader/>}>
      <Outlet/>
      </Suspense>
      <Footer/>
    </div>
  ) : null
}

export default App
