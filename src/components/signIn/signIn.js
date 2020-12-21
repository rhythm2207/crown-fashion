import React, { Component } from 'react';
import Input from '../input/input'
import './signIn.scss'
import Button from '../custom button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit} action="">
                    <Input label='email' name="email" value={this.state.email} handleChange={this.handleChange} />
                    <Input label='password' name="password" value={this.state.password} handleChange={this.handleChange} />
                    <div className="buttons">
                        <Button type='submit'> Sign in </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn