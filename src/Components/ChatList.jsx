import React from 'react';

const ChatList = () => {
     return (
          <div className="main-container">
               <div className="sidebar">
                    <div className="sidebar-icon active"><i className="fa-solid fa-comment"></i></div>
                    <div className="sidebar-icon"><i className="fa-solid fa-user-group"></i></div>
                    <div className="sidebar-icon"><i className="fa-solid fa-gear"></i></div>
               </div>

               <div className='chat-list'>
                    <div>
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

                    </div>

                    <div>
                         <div className="chat-item">
                              <div className="user-list-img">
                                   <img
                                        src="https://randomuser.me/api/portraits/men/11.jpg"
                                        alt="User 1"
                                   />
                              </div>
                              <div className="chat-info">
                                   <div className="chat-header">
                                        <p className='user-name'>John Doe</p>
                                        <span className="chat-time">10:24 AM</span>
                                   </div>
                                   <div className='d-flex justify-content-between align-items-center'>
                                        <p className='message'>Hello, how are you?</p>
                                   </div>
                              </div>
                         </div>


                         <div className="chat-item">
                              <div className="user-list-img">
                                   <img
                                        src="https://randomuser.me/api/portraits/women/12.jpg"
                                        alt="User 2"
                                   />
                              </div>
                              <div className="chat-info">
                                   <div className="chat-header">
                                        <p className='user-name'>Jane Smith</p>
                                        <span className="chat-time">09:15 AM</span>
                                   </div>
                                   <div className='d-flex justify-content-between align-items-center'>
                                        <p className='message'>Are we meeting today?</p>
                                        <p className='message-count'>99</p>
                                   </div>
                              </div>
                         </div>


                         <div className="chat-item">
                              <div className="user-list-img">
                                   <img
                                        src="https://randomuser.me/api/portraits/men/13.jpg"
                                        alt="User 3"
                                   />
                              </div>
                              <div className="chat-info">
                                   <div className="chat-header">
                                        <p className='user-name'>Michael</p>
                                        <span className="chat-time">Yesterday</span>
                                   </div>
                                   <div className='d-flex justify-content-between align-items-center'>
                                        <p className='message'>Sent the documents.</p>
                                        <p className='message-count'>2</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default ChatList;
