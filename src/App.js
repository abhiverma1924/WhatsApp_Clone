import React, {useState, useEffect} from 'react'

import emojiIcon from './assets/tag_faces.svg'
import doubleCheck from './assets/done_all.svg'
import micIcon from './assets/mic.svg'

import {mainUser, contactsMessages, Message} from './Faker.js'

import Avatar from './components/profile'
import Contact from './components/contact'
import MessageBox from './components/MessageBox'
import InputBox from './components/input'

import './App.css'

function App() {
    const[data, setData] = useState(contactsMessages)
    const[contactSelected,setContactSelected ] = useState({})
    const[currentMessages, setCurrentMessage] = useState([])
    const[message, setMessage] = useState('')

    useEffect(() =>{
      const currContact = data.find((d )=> d.contact.id === contactSelected.id)
      setCurrentMessage((currContact && currContact.messages || []))
    },[contactSelected, data] )

    function Messenger(){
      const index = data.findIndex(d => d.contact.id === contactSelected.id)
      const newData = Object.assign([], data, {
        [index] :{
          contact: contactSelected,
          messages: [...data[index].messages, new Message(true, message, new Date())],
        },
      })
      setData(newData)
    }
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
              <InputBox  message = {message} setMessage = {setMessage} Messenger = {Messenger} />
            </main>
        </div>
    )
}

export default App