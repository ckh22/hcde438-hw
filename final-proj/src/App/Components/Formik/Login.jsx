import React from 'react'
import { Formik, Field, Form } from 'formik';
import {useDispatch} from 'react-redux'
import { signInUser } from '../../Logic/Auth/authActions';

const Login = ({setTimestamp}) => {
    const dispatch = useDispatch()
    return (
        <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        dispatch(signInUser(values))
        let now = Date.now()
        localStorage.setItem('time', now)
        setTimestamp(now)
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
    )
}

export default Login
