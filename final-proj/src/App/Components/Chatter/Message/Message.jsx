import React from 'react'

const Message = ({message, auth}) => {
    const {text, uid, photoURL} = message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';
    return (<div>
        {text}
    </div>)
}

export default Message
