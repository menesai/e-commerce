import React, { Component } from 'react'
import './SignIn.scss'
import {Form, Header, Button, Divider} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom';
import {auth} from '../../firebase';
import firebase from '../../firebase';
import {connect} from 'react-redux'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
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

    handleForm = async (e) => {
        e.preventDefault();
        
        const {email, password}= this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch(error){
            console.log(error)
        }

    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

  


    render() {
        if(this.props.currentUser){return <Redirect push to ='/'/>}
        const {email, password}=this.state
            return (
                <div className='signIn'>
                    <div className='div-1'>
                    <Form  className='SignInForm' onSubmit={this.handleForm}>
                       <Header as='h2' color='blue' textAlign='center' className='signInHeader'>
                        {/* <Icon name='shopping bag' color='black' size='small'/> */}
                            Welcome back 
                       </Header>
                        <span style={{textAlign: 'center', marginBottom: 14}}>Sign in with email and password</span>
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

                         <div className='separator'>
                             <Divider horizontal>Or</Divider>
                         </div>
                         

                         <div className='provider'>
                         <StyledFirebaseAuth 
                        uiCallback={ui => ui.disableAutoSignIn()} 
                        uiConfig={uiConfig} 
                        firebaseAuth={firebase.auth()}/>
                         </div>

                            <div className='register-message'>
                                <label className='register-link'>Don't have an account? <Link to='/register'>Create one here</Link></label>
                            </div>
                    </Form>
                    </div>
    
                    <div className='box-2' >
                    <div className='wave -one'></div>
                    <h3 className='s-title'>Discover new styles at Allwear</h3>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(SignIn);

