// importing redux, and dispatch actions
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Login from '../../Components/Formik/Login'
import Nav from '../../Components/Navbar/Nav'
import FishBase from '../../Logic/API/FishBase'
import {signInUser, signOutUser} from '../../Logic/Auth/authActions'

const Homepage = () => {
    const dispatch = useDispatch()
    const {async, auth, test} = useSelector(state => state)
    console.log(auth)
    function signOut(value) {
        dispatch(signOutUser())
    }

    return (
        <div>
            <FishBase />
            <Nav/> {
            auth.authenticated ? <div>You signed in from the email: {
                auth.currentUser.email
            }
                <br/><button onClick={
                    (value) => {
                        signOut(value)
                    }
                }>sign out</button>
            </div> : <Login loading={async.loading}/>
        } </div>
    )
}

export default Homepage
