import React, { Component } from 'react'
import './SignIn.scss'
import firebase from '../../firebase';

class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }

    handleForm = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        // console.log(this.state)
        const {email, password}=this.state
        return (
            <div className='signIn'>

                <form className='SignInForm' onSubmit={this.handleForm}>
                    {/* <div>
                        <h2>I already have an account</h2>
                        <span>Sign In with your email and password</span>
                    </div> */}

                    <input
                    name='email'
                    type='email'
                    placeholder='enter email'
                    value={email}
                    required
                    onChange={this.handleChange}
                    />
                     {/* <label>Email</label> */}
                    <input
                    name='password'
                    type='password'
                    placeholder='enter password'
                    value={password}
                    required
                    onChange={this.handleChange}
                    />
                     {/* <label>Password</label> */}
                     <input type='submit' value='Submit'/>
                </form>

                <div className='provider'>
                    google, facebook, github, login
                </div>
            </div>
        )
    }
}

export default SignIn
