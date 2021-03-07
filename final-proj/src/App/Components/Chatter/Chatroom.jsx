import React, {useRef, useState, useEffect} from 'react'
import {auth, firestore, signInWithGoogle, sendMessage} from '../../Database/db'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Button} from '@material-ui/core'
import Message from './Message/Message'

const Chatroom = ({ticker}) => {
    const [user] = useAuthState(auth)
    const messageRef = firestore.collection(`${ticker}messages`)
    const query = messageRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, {idField: 'id'})
    const [formValue, setFormValue] = useState('')
    const messenger = async (e) => {
        e.preventDefault()
        sendMessage(messageRef, formValue)
        setFormValue('')
    }
    return (
        <div className='right-panel'>
            {
            user ? <div>
                <div>
                    <div> {
                        messages && messages.map(msg => <Message key={
                                msg.id
                            }
                            message={msg}
                            auth={auth}/>)
                    }</div>
                </div>


                <form onSubmit={messenger}><input type="text"
                        value={formValue}
                        onChange={
                            (e) => setFormValue(e.target.value)
                        }/><button type='submit'></button>
                </form>
            </div> : <div>
                <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
        } </div>
    )
}

export default Chatroom
