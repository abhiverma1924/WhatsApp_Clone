import React from 'react'
import Message from './Message'
export default function MessageBox({messages}){
  return (
    <div className="chats">
      {messages.map((m) => (
        <Message message ={m} key = {m.id} />   
      ))}
      
    </div>
  )
}