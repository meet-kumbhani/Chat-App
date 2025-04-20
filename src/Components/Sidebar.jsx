import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
     return (
          <div>
               <div className="sidebar h-100">
                    <Link to={"/"} className="sidebar-icon active"><i className="fa-solid fa-comment"></i></Link>
                    <div className="sidebar-icon"><i className="fa-solid fa-user-group"></i></div>
                    <div className="sidebar-icon"><i className="fa-solid fa-gear"></i></div>
               </div>

          </div>
     )
}

export default Sidebar
