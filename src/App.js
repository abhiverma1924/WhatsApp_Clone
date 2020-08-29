import React from 'react'

import emojiIcon from './assets/tag_faces.svg'

import doubleCheck from './assets/done_all.svg'

import micIcon from './assets/mic.svg'

import './App.css'

function App() {
    return (
        <div className="app">
            <aside>
                <header>
                    <div className="avatar-component">
                        <img
                            className="avatar"
                            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                            alt=""
                        />
                    </div>
                </header>
                <div className="search">
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>

                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Jessica</h3>
                                <span className="time-mark">yesterday</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <header>
                    <div className="avatar-component">
                        <img
                            className="avatar"
                            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                            alt=""
                        />

                        <h3 className="avatar-title">Sofia</h3>
                    </div>
                </header>
                <div className="chats">
                    <div className="message received">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatibus fuga illo.
                        <div className="metadata">
                            <span className="date">05/20/2020</span>
                        </div>
                    </div>
                    <div className="message sent">
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                        <div className="metadata">
                            <span className="date">05/20/2020</span>
                            <img src={doubleCheck} alt="" className="icon-small" />
                        </div>
                    </div>
                </div>
                <div className="chat-input-box">
                    <div className="icon emoji-selector">
                        <img src={emojiIcon} alt="" />
                    </div>

                    <div className="chat-input">
                        <input type="text" placeholder="Type a message" />
                    </div>

                    <div className="icon send">
                        <img src={micIcon} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
