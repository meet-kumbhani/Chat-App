import React from 'react';
import Sidebar from './Sidebar';
import useWindowWidth from '../Assets/Js/UseWindowWidth';

const ChatWindow = () => {
     const width = useWindowWidth();
     const isSmallScreen = width < 940;

     const handleCallClick = () => {
          console.log('Calling...');
     };

     const handleVideoCallClick = () => {
          console.log('Starting video call...');
     };

     const handleSearchClick = () => {
          console.log('Search clicked');
     };

     return (
          <div className="chat-app">
               {isSmallScreen && <Sidebar />}

               <div className="chat-window">
                    <div className="chat-window-header">
                         <div className='d-flex align-items-center gap-2'>
                              <div className="chat-avatar">
                                   <img
                                        src="https://randomuser.me/api/portraits/men/11.jpg"
                                        alt="avatar"
                                   />
                              </div>
                              <div className="chat-info">
                                   <h3 className="chat-name">John Doe</h3>
                                   <p className="chat-status">Online</p>
                              </div>
                         </div>

                         <div className="chat-actions">
                              <div onClick={handleSearchClick}>
                                   <i className="fas fa-search chat-icon"></i>
                              </div>
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