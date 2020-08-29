import React from 'react'
import doubleCheck from '../assets/done_all.svg'
import Avatar from './profile'

export default function Contact({contact,setContactSelected, messages}){ const maxDate = Math.max(...messages.map( m => m.date.getTime()))
  const lastmessage = messages.find((m) => m.date.getTime() === maxDate) 
  return (
      <div className="contact-boxes" onClick= { () => setContactSelected(contact)}>
        <div className="contact-box"> 
            <Avatar user = {contact}/>
              <div className="right-section">
                <div className="contact-box-header">
                    <h3 className="avatar-title">{contact.name}</h3>
                    <span className="time-mark">{lastmessage.date.toLocaleDateString()}</span>
                </div>
                <div className="last-msg">
                    <img src={doubleCheck} alt="" className="icon-small" />
                    <span className="text">{lastmessage.msg}</span>
                </div>
            </div>
        </div>
      </div>

  )
}