import React, {useState} from 'react'
import {Form, TextField} from 'react-components-form';
import Schema from 'form-schema-validation';

const NamePicker = () => {
    const [name, setName] = useState('')
    const [open, setOpen] = useState(true)
    const inputSchema = new Schema({
        login: {
            type: String,
            required: true
        }
    });

    const handleOpen = () => {
        setOpen(!open)
    }

    function handleSubmit(model) {
        if (model.login >= 1) {
            setName(model.login)
            handleOpen()
        } 
    }

    return (
        <div className='right'>
            {open
                ? <Form schema={inputSchema}
                onSubmit={
                    model => handleSubmit(model)
                }
                onError={
                    (errors, data) => console.log('error', errors, data)
            }>
                <TextField name="login" type="text"/>
                <button value='submit'>Submit</button>
            </Form>
                : <><div style={{display:'inline-block'}}>{name}</div><div style={{display:'inline-block', marginLeft: '1em'}} onClick={handleOpen} className='logout'>Logout</div></>
            }
        </div>
    )
}

export default NamePicker
