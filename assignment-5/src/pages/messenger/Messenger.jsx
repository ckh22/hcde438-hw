import React, {useEffect, useState} from 'react'
import NamePicker from '../../components/NamePicker/NamePicker'
import {Form, TextField} from 'react-components-form';
import Schema from 'form-schema-validation';
import './scss/Messenger.css'
import {v4 as uuidv4} from 'uuid';


const Messenger = () => {
    const [message, setMessage] = useState('')

    const lister = [];
    looper()
    function looper() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = JSON.parse(localStorage.getItem(key))
            lister.push(value)
        }
    }

    useEffect(() => {
        if (message.length !== 0) {
            let item = JSON.stringify({'message': message, 'date': Date.now()})
            localStorage.setItem(uuidv4(), item)
            lister.push(item)
        }
        setMessage('')
    }, [message, lister])

    const inputSchema = new Schema({
        message: {
            type: String,
            required: true
        }
    });


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
                {
                lister.sort(function (a, b) {
                    return a.date - b.date;
                }).map((item) => (
                    <div className='container'
                        key={
                            uuidv4()
                    }>
                        <div className='message'>
                            {
                            item.message
                        }</div>
                        <div className='date'>
                            {
                            new Date(item.date).getHours()
                        }:{
                            new Date(item.date).getMinutes()
                        }</div>
                    </div>

                ))
            } </div>
            <div className="input-area">
                <Form schema={inputSchema}
                    className='myForm'
                    onSubmit={
                        model => handleSubmit(model)
                    }
                    onError={
                        (errors, data) => console.log('error', errors, data)
                }>
                    <TextField name="message" type="text"
                        value={message}
                        onChange={
                            e => setMessage(e.target.value)
                        }
                        className='txt-input'/>
                    <button value='submit'>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default Messenger
