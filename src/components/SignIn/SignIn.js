import React, { Component } from 'react'
import './SignIn.scss'
import {Form, Header, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
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

                <Form size='small' className='SignInForm' onSubmit={this.handleForm} style={{maxWidth: 450}}>
                   <Header as='h2' color='blue' textAlign='center'>
                    <Icon name='shopping bag' color='black' size='small'/>
                        Sign in with your email
                   </Header>

                    <Form.Input
                    icon='user'
                    iconPosition='left'
                    name='email'
                    type='email'
                    placeholder='enter email'
                    value={email}
                    required
                    onChange={this.handleChange}
                    />
                     {/* <label>Email</label> */}
                    <Form.Input
                    icon='lock'
                    iconPosition='left'
                    name='password'
                    type='password'
                    placeholder='enter password'
                    value={password}
                    required
                    onChange={this.handleChange}
                    />

                     <Button type='submit' value='Submit' color='blue'>Login</Button>
                        <div className='register-message'>
                            <label className='register-link'>Don't have an Account? <Link to='#'> click here</Link></label>
                        </div>
                </Form>

                <div className='provider'>
                    google, facebook, github, login
                </div>
            </div>
        )
    }
}

export default SignIn
