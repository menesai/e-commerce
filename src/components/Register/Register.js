import React, { Component } from 'react'
import './Register.scss'
import {auth, userDocument} from '../../firebase';

export class Register extends Component {
    constructor(){
        super();
        
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit  = async (e) =>{
        e.preventDefault();
    const {displayName, email, confirmPassword, password} =this.state;

    if(password !== confirmPassword){
        alert('Passwords Dont match')
        return;
    }

        try{
            const {user} = auth.createUserWithEmailAndPassword(email, password)

            await userDocument(user, {displayName})

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })

        } catch(err){
            console.log(err)
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {displayName, email, password, confirmPassword} =this.state;
        return (
            <div className='register'>
                <h2>Register</h2>

                <form className='register-form' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        name='displayName'
                        value={displayName}
                        placeholder='Name'
                    />
                    <input
                        type='email'
                        onChange={this.handleChange}
                        name='email'
                        value={email}
                        placeholder='Email'
                    />
                    <input
                        type='password'
                        onChange={this.handleChange}
                        name='password'
                        value={password}
                        placeholder='Password'
                    />
                    <input
                        type='password'
                        onChange={this.handleChange}
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder='Re-enter Password'
                    />
                    <input type='submit'/>
                </form>
            
            </div>
        )
    }
}

export default Register
