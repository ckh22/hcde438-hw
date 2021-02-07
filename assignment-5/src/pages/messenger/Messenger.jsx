import React, {useEffect, useState} from 'react'
import NamePicker from '../../components/NamePicker/NamePicker'
import {Form, TextField} from 'react-components-form';
import Schema from 'form-schema-validation';
import './scss/Messenger.css'
import { v4 as uuidv4 } from 'uuid';


const Messenger = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (message.length !== 0) {
            localStorage.setItem(uuidv4(), JSON.stringify({'message': message, 'date': Date.now()}))
            lister.push(message)
            console.log(JSON.parse(message))
        }
        setMessage('')
    }, [message])

    const inputSchema = new Schema({
        message: {
            type: String,
            required: true
        }
    });

    const lister = []
    function looper() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            lister.push(value)
        }
    }
    looper()

    function handleSubmit(model) {
        setMessage(model.message)
    }
    return (
        <div className='main'>
            <nav>
                <div className="top-content">
                    <div className="left">
                        <div className="logo">logo</div>
                        <div className="title">title</div>
                    </div>
                    <NamePicker/>
                </div>
            </nav>
            <div className="messages">
                {lister.map((item) => (
                    <div className='message'>{item.message}</div>
                ))}
            </div>
            <div className="input-area">
                <Form schema={inputSchema}
                    onSubmit={
                        model => handleSubmit(model)
                    }
                    onError={
                        (errors, data) => console.log('error', errors, data)
                }>
                    <TextField name="message" type="text"/>
                    <button value='submit'>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default Messenger
