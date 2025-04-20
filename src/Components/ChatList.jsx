import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import useWindowWidth from '../Assets/Js/UseWindowWidth';
import { useNavigate } from 'react-router-dom';

const users = [
     {
          id: 1,
          name: 'Jane Smith',
          message: 'Are we meeting today?',
          time: '09:15 AM',
          img: 'https://randomuser.me/api/portraits/women/12.jpg',
     },
     {
          id: 2,
          name: 'John Doe',
          message: 'Let’s catch up!',
          time: '10:05 AM',
          img: 'https://randomuser.me/api/portraits/men/45.jpg',
     },
];

const ChatList = () => {
     const width = useWindowWidth();
     const isSmallScreen = width < 940;

     const [selectedUser, setSelectedUser] = useState(null);
     const navigate = useNavigate();

     useEffect(() => {
          if (!isSmallScreen && selectedUser === null) {
               setSelectedUser(users[0]);
          }
     }, [isSmallScreen, selectedUser]);

     const handleUserClick = (user) => {
          if (isSmallScreen) {
               navigate(`/user-chat`, { state: { user } });
          } else {
               setSelectedUser(user);
          }
     };

     const handleBack = () => {
          setSelectedUser(null);
     };

     return (
          <div className="main-container d-flex">
               <Sidebar />

               <div className="chat-list-container d-flex w-100">
                    {(!isSmallScreen || (isSmallScreen && !selectedUser)) && (
                         <div className="chat-list" style={{ width: isSmallScreen ? '100%' : '40%' }}>
                              <div className="chat-header-container">
                                   <div className="mb-2 d-flex justify-content-between align-items-center">
                                        <p className="chat-title">Chats</p>
                                        <div className="chat-header-icons">
                                             <i className="fa-regular fa-pen-to-square mx-2"></i>
                                             <i className="fa-solid fa-sliders mx-2"></i>
                                        </div>
                                   </div>

                                   <div className="chat-search-box">
                                        <i className="fa fa-search search-icon"></i>
                                        <input
                                             type="text"
                                             className="search-input"
                                             placeholder="Search or start a new chat"
                                        />
                                   </div>
                              </div>

                              {users.map((user) => (
                                   <div
                                        key={user.id}
                                        className="chat-item nav-link"
                                        onClick={() => handleUserClick(user)}
                                   >
                                        <div className="right-part">
                                             <div className="user-list-img">
                                                  <img src={user.img} alt={user.name} />
                                             </div>
                                             <div className="w-100">
                                                  <p className="user-name">{user.name}</p>
                                                  <p className="last-message">{user.message}</p>
                                             </div>
                                        </div>
                                        <div className="chat-info">
                                             <p className="chat-time">{user.time}</p>
                                             <p className="message-count">99</p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    )}
                    {selectedUser && !isSmallScreen && (
                         <div className="chat-window-wrapper" style={{ width: '60%' }}>
                              <ChatWindow user={selectedUser} onBack={handleBack} />
                         </div>
                    )}
               </div>
          </div>
     );
};

export default ChatList;