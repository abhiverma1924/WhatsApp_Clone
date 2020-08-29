import React, {useRef, useEffect} from 'react'
import Message from './Message'
export default function MessageBox({messages}){
  const endDiv = useRef(null)
    useEffect(() => {
        endDiv.current.scrollIntoView()
    })
  return (
    <div className="chats">
      {messages.map((m) => (
        <Message message ={m} key = {m.id} />   
      ))}
    <div style ={{float: 'right', clear: 'both'}} ref = {endDiv}> </div>
    </div>
  )
}