import React, {useRef, useState, useEffect} from 'react'
import {auth, firestore, signInWithGoogle, sendMessage} from '../../Database/db'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Button, TextField} from '@material-ui/core'
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
        sendMessage(messageRef, formValue)
        setFormValue('')
        scroller.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className='right-panel'>
            {
            user ? <div className='messages' id='style-2'>

                <div className='message'>
                    {
                    messages && messages.map(msg => <Message key={
                            msg.id
                        }
                        message={msg}
                        auth={auth}/>)
                }<div ref={scroller}></div></div>

                
            </div> : <div>
                <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
        }
            <form onSubmit={messenger}
                className='chat-form'><TextField 
                    id='standard-basic'
                    type="text"
                    value={formValue}
                    label="Message!"
                    style={{width: '100%'}}
                    onChange={
                        (e) => setFormValue(e.target.value)
                    }/><button type='submit'></button>
            </form>
        </div>
    )
}

export default Chatroom
