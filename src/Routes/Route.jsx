import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ChatList from '../Components/ChatList'

const Router = () => {
     return (
          <>
               <Routes>
                    <Route path="/" element={<ChatList />}></Route>
               </Routes>
          </>
     )
}

export default Router
