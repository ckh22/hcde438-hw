import { Paper, Avatar, Typography } from '@material-ui/core'
import React from 'react'

const Message = ({message, auth}) => {
    const {text, uid, photoURL} = message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved'
    return (<div className={`message ${messageClass}`}>
        <Paper elevation={15}><Typography className='message-text'>{text}</Typography></Paper><Avatar alt="Remy Sharp" src={photoURL} className='avatar' />
    </div>)
}

export default Message
