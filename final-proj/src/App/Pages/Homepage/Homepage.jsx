// importing redux, and dispatch actions
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Login from '../../Components/Formik/Login'
import Nav from '../../Components/Navbar/Nav'
import { signInUser, signOutUser } from '../../Logic/Auth/authActions'

const Homepage = () => {
    const dispatch = useDispatch()
    const {async, auth, test} = useSelector(state => state)
    const [timestamp, setTimestamp] = useState('null')
    function signOut() {
        localStorage.clear()
        setTimestamp(null)
        dispatch(signOutUser())
    }

    useEffect(() => {
        let item = localStorage.getItem('time')
        setTimestamp(item)
        if (item !== null) {
            console.log(item)
        }
    }, [timestamp])
    return (
        <div>
            <Nav />
            {timestamp ? <div>You signed in from: {Date(timestamp)} <button onClick={() => {signOut()}}>sign out</button></div> : <Login setTimestamp={setTimestamp} />}
        </div>
    )
}

export default Homepage