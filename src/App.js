import React, {useState, useEffect} from 'react'

import emojiIcon from './assets/tag_faces.svg'

import doubleCheck from './assets/done_all.svg'

import micIcon from './assets/mic.svg'
import {mainUser, contactsMessages} from './Faker.js'
import Avatar from './components/profile'
import Contact from './components/contact'
import MessageBox from './components/MessageBox'


import './App.css'

function App() {
    const[data, setData] = useState(contactsMessages)
    const[contactSelected,setContactSelected ] = useState({})
    const[currentMessages, setCurrentMessage] = useState([])

    useEffect(() =>{
      const currContact = data.find( d => d.contact.id === contactSelected.id)
      setCurrentMessage((currContact && currContact.messages || []))
    },[contactSelected, data] )
    return (
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser}/>
                </header>
                <div className="search">
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
                <div className="contact-boxes">
                  {data.map(({contact}) => (
                    <Contact contact ={contact}  key = {contact.id} setContactSelected = {setContactSelected} />
                  ))}
                </div>
                       
            </aside>
            <main>
                <header>
                   <Avatar user = {contactSelected} showName />
                </header>
                <MessageBox messages = {currentMessages} />
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