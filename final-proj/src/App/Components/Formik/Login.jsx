import React from 'react'
import {Formik, Field, Form} from 'formik';
import {useDispatch} from 'react-redux'
import {signInUser} from '../../Logic/Auth/authActions';
import { asyncActionFinish, asyncActionStart } from '../../Logic/Async/asyncReducer';
import { LinearProgress } from '@material-ui/core';

const Login = ({loading}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {loading ? <LinearProgress />: <div>no loading</div>}
            <h1>Sign Up</h1>
            <Formik initialValues={
                    {email: ''}
                }
                onSubmit={
                    async (values) => {
                        dispatch(asyncActionStart())
                        await new Promise((r) => setTimeout(r, 500));
                        console.log(values)
                        dispatch(signInUser(values))
                        dispatch(asyncActionFinish())
                    }
            }>
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
