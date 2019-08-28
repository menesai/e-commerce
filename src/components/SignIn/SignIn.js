import React, { Component } from 'react'
import './SignIn.scss'
import {Form, Header, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signin',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
  };

class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: '',
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
        // console.log(firebase.auth().currentUser)
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
                                <label className='register-link'>Don't have an Account? <Link to='/register'>create one here</Link></label>
                            </div>
                    </Form>
                    
    
                    <div className='provider'>
                        <div style={{'textAlign': 'center'}}>
                            <h3>Sign In With...</h3>
                        </div>

                        <StyledFirebaseAuth 
                        uiCallback={ui => ui.disableAutoSignIn()} 
                        uiConfig={uiConfig} 
                        firebaseAuth={firebase.auth()}/>
                    </div>
                </div>
            )
    }
}

export default SignIn;

