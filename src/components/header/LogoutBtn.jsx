import React from 'react';
import {useDispatch } from 'react-redux';
import authService from '../../Appwrite/auth_services';
import { logout } from '../../features/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch()
     function logoutHandler(){
        authService.Logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='logout-btn rounded-3xl px-5 py-3 duration-200 bg-red-600 hover:bg-red-800' onClick={logoutHandler}>Logout</button>
  );
}

export default LogoutBtn;
