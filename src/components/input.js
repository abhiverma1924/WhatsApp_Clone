import React from 'react'
import micIcon from '../assets/mic.svg'
import emojiIcon from '../assets/tag_faces.svg'
import sendIcon from '../assets/send.svg'

export default function InputBox({message, setMessage, Messenger}){
  return (
       <div className="chat-input-box">
          <div className="icon emoji-selector">
              <img src={emojiIcon} alt="" />
          </div>

          <div className="chat-input">
              <input type="text" placeholder="Type a message" value = {message} onChange = {(e) => setMessage(e.target.value)}
              />
          </div>
          <div className="icon send" onClick= {Messenger}>
              <img src={message? sendIcon :micIcon} alt="" />
          </div>
        </div>
  )
}
