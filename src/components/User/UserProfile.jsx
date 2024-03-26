import React from 'react'
import { Routes,Route, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './User.scss'
import UserBar from './UserBar';

import './User.scss'
function UserProfile() {
  return (
    < div className='profilecontainer'>
    
    <div className="container light-style flex-grow-1  container-p-y  py-2 bachground ">
     <div className="card ">
    <div className="row  row-bordered row-border-light    ">
    <div className="col-2 ">
    <UserBar/>
    </div>
    <div className="col-10">
        <div className="tab-content  overflow-x-hidden overflow-y-scroll ">
      <Outlet/>
        
      </div>
      </div>
        </div>
        </div>
        
          </div>
        </div>
  )
}

export default UserProfile