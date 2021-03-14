import React from 'react'

const Message = ({message, auth}) => {
    const {text, uid, photoURL} = message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';
    return (<div className='message-wrap'>
        {text}
    </div>)
}

export default Message
