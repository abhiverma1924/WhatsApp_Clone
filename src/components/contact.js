import React from 'react'
import doubleCheck from '../assets/done_all.svg'
import Avatar from './profile'

export default function Contact({contact,setContactSelected}){
  return (
      <div className="contact-boxes" onClick= { () => setContactSelected(contact)}>
        <div className="contact-box"> 
            <Avatar user = {contact}/>
              <div className="right-section">
                <div className="contact-box-header">
                    <h3 className="avatar-title">{contact.name}</h3>
                    <span className="time-mark">yesterday</span>
                </div>
                <div className="last-msg">
                    <img src={doubleCheck} alt="" className="icon-small" />
                    <span className="text">Lorem ipsum dolor</span>
                </div>
            </div>
        </div>
      </div>

  )
}