import React from 'react'
import Input from '../input/input'
import Button from '../custom button/custom-button'
import './signUp.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log("Sign-up error ", error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="signup">
                <h2 className="title">
                    I do not have an account
            </h2>
                <span>Sign Up with your email and password</span>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <Input label='display name' value={displayName} onChange={this.handleChange} name='displayName' />
                    <Input label='email' value={email} onChange={this.handleChange} name='email' />
                    <Input label='password' value={password} onChange={this.handleChange} name='password' type="password" />
                    <Input label='confirm password' value={confirmPassword} onChange={this.handleChange} name='confirmPassword' type="password" />
                    <Button type='submit'> Sign Up </Button>
                </form>
            </div>
        )
    }
}

export default SignUp