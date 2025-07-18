import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ChatWindow = ({ user: propUser }) => {
     const location = useLocation();
     const routedUser = location.state?.user || null;
     const pathName = location.pathname === '/user-chat';
     const user = propUser || routedUser;

     const handleCallClick = () => {
          console.log(`Calling ${user?.name || 'user'}...`);
     };

     const handleVideoCallClick = () => {
          console.log(`Starting video call with ${user?.name || 'user'}...`);
     };

     if (!user) {
          return (
               <div className="chat-window d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                    <p>No user selected</p>
               </div>
          );
     }

     return (
          <div className="chat-app">

               <div className="chat-window">
                    <div className="chat-window-header">
                         <div className='d-flex align-items-center gap-2'>
                              {pathName ? (
                                   <Link to={'/'} className='nav-link fs-5'>
                                        <i class="fa-solid fa-arrow-left"></i>
                                   </Link>) : ''}

                              <div className="chat-avatar">
                                   <img src={user.img} alt={user.name} />
                              </div>
                              <div className="chat-info">
                                   <h3 className="chat-name">{user.name}</h3>
                                   <p className="chat-status">Online</p>
                              </div>
                         </div>

                         <div className="chat-actions">
                              <div onClick={handleCallClick}>
                                   <i className="fas fa-phone chat-icon"></i>
                              </div>
                              <div onClick={handleVideoCallClick}>
                                   <i className="fas fa-video chat-icon"></i>
                              </div>
                         </div>
                    </div>

                    <div className="chat-messages">
                         <div className="message received">Hello there!</div>
                         <div className="message sent">Hey! How are you?</div>
                         <div className="message received">I'm good. What's up?</div>
                    </div>

                    <div className="chat-input">
                         <div className='file-upload'>
                              <i className="fas fa-paperclip"></i>
                         </div>
                         <input type="text" placeholder="Type a message..." />
                         <button>Send</button>
                    </div>
               </div>
          </div>
     );
};

export default ChatWindow;