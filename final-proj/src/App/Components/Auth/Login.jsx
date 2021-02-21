// import material, formik, and yup
import React from 'react'
import {Button, TextField} from '@material-ui/core'
import {useFormik} from "formik";
import * as Yup from "yup";
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        left: '5%',
        top: '5%'
    }
}));

const Login = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const validationSchema = Yup.object({
        email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: Yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className='form-container'>
            
            <form onSubmit={
                    formik.handleSubmit
                }
                className='auth-form'>
                <h2>Login</h2>
                <br/>
                <TextField fullWidth id="email" name="email" label="Email"
                    value={
                        formik.values.email
                    }
                    onChange={
                        formik.handleChange
                    }
                    error={
                        formik.touched.email && Boolean(formik.errors.email)
                    }
                    helperText={
                        formik.touched.email && formik.errors.email
                    }/>
                <TextField fullWidth id="password" name="password" label="Password" type="password"
                    value={
                        formik.values.password
                    }
                    onChange={
                        formik.handleChange
                    }
                    error={
                        formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }/>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Login
