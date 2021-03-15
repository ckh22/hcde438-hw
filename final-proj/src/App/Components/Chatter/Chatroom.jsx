import React, {useRef, useState} from 'react'
import {
    auth,
    firestore,
    signInWithGoogle,
    sendMessage,
    signOut
} from '../../Database/db'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link} from 'react-router-dom'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Button, Input} from '@material-ui/core'
import Message from './Message/Message'

const Chatroom = ({ticker}) => {
    const [user] = useAuthState(auth)
    const messageRef = firestore.collection(`${ticker}messages`)
    const query = messageRef.orderBy('createdAt')
    const [messages] = useCollectionData(query, {idField: 'id'})
    const [formValue, setFormValue] = useState('')
    const scroller = useRef()
    const messenger = async (e) => {
        e.preventDefault()
        if (formValue.length > 0) {
            sendMessage(messageRef, formValue)
        }
        setFormValue('')
    }
    return (
        <div className='right-panel'>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li> {
                        user ? <div> {
                            user.displayName
                        } </div> : <div></div>
                    }
                        {
                        user ? <Button onClick={signOut}>Logout</Button> : <Button onClick={signInWithGoogle}>Sign In</Button>
                    } </li>
                </ul>
            </nav>
            {
            user ? <div className='messages' id='style-2'>

                <div className='message'>
                    {
                    messages && messages.map(msg => <Message key={
                            msg.id
                        }
                        message={msg}
                        auth={auth}/>)
                }
                    <div ref={scroller}></div>
                </div>


            </div> : <div className='messages'
                style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 'large'
                    }
            }>
                Join the chatroom! ⬆️
            </div>
        }
            <form onSubmit={messenger}
                className='chat-form'><Input value={formValue}
                    disabled={
                        user ? false : true
                    }
                    label="Message!"
                    style={
                        {width: '100%'}
                    }
                    onChange={
                        (e) => setFormValue(e.target.value)
                    }/>
                <Button type='submit'
                    disabled={
                        user ? false : true
                }>Button</Button>
            </form>
        </div>
    )
}

export default Chatroom
