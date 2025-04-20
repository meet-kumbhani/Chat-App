import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ChatList from '../Components/ChatList'
import ChatWindow from '../Components/ChatWindow'

const Router = () => {
     return (
          <>
               <Routes>
                    <Route path="/" element={<ChatList />}></Route>
                    <Route path="/user-chat" element={<ChatWindow />}></Route>
               </Routes>
          </>
     )
}

export default Router
