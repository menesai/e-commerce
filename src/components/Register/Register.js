import React, { Component } from 'react'
import './Register.scss'
import {auth, userDocument} from '../../firebase';
import {Form, Button} from 'semantic-ui-react'

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
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

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
                {/* <div className='elel'> */}
                <Form className='register-form' onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                    <Form.Input
                        type='text'
                        onChange={this.handleChange}
                        name='displayName'
                        icon='user outline'
                        iconPosition='left'
                        value={displayName}
                        placeholder='Name'
                        required
                    />
                    <Form.Input
                        type='email'
                        onChange={this.handleChange}
                        name='email'
                        icon='mail'
                        iconPosition='left'
                        value={email}
                        placeholder='Email'
                        required
                    />
                    <Form.Input
                        type='password'
                        onChange={this.handleChange}
                        name='password'
                        value={password}
                        placeholder='Password'
                        required
                        icon='lock'
                        iconPosition='left'
                    />
                    <Form.Input
                        type='password'
                        onChange={this.handleChange}
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder='Re-enter Password'
                        required
                        icon='redo'
                        iconPosition='left'
                    />
                    <Button color='linkedin' type='submit'>Submit</Button>
                </Form>

                <div className='meta-data' >
                    {/* <img src='' alt='shopping'/> */}
                </div>
                {/* </div> */}
            
            </div>
        )
    }
}

export default Register
