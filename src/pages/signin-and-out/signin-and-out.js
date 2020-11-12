import React from 'react'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/signUp/signUp'
import './signin-and-out.scss'


const SignInOut = () => {
    return (
        <div className="signPage">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInOut