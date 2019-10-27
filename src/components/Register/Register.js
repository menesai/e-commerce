// import React, { Component } from 'react'
// import './Register.scss'
// import {auth, userDocument} from '../../firebase';
// import {Form, Button, Header} from 'semantic-ui-react'
// // import logo from '../SignIn/sec.svg'

// export class Register extends Component {
//     constructor(){
//         super();
        
//         this.state={
//             displayName: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }

//     handleSubmit  = async (e) =>{
//         e.preventDefault();
//     const {displayName, email, confirmPassword, password} =this.state;

//     if(password !== confirmPassword){
//         alert('Passwords Dont match')
//         return;
//     }

//         try{
//             const {user} = await auth.createUserWithEmailAndPassword(email, password)

//             await userDocument(user, {displayName})

//             this.setState({
//             displayName: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//             })

//         } catch(err){
//             console.log(err)
//         }
//     }

//     handleChange = (e) => {
//         this.setState({[e.target.name]: e.target.value})
//     }

//     render() {
//         const {displayName, email, password, confirmPassword} =this.state;
//         return (
//             <div className='register'>
//                 {/* <div className='elel'> */}
//                 <Form className='register-form' onSubmit={this.handleSubmit}>
//                 <Header as='h2' color='blue' textAlign='center' className='signInHeader'>
//                             Register 
//                        </Header>
//                        <span style={{textAlign: 'center', marginBottom: 20}}>Sign in with email and password</span>
//                     <Form.Input
//                         type='text'
//                         onChange={this.handleChange}
//                         name='displayName'
//                         icon='user outline'
//                         iconPosition='left'
//                         value={displayName}
//                         placeholder='Name'
//                         required
//                     />
//                     <Form.Input
//                         type='email'
//                         onChange={this.handleChange}
//                         name='email'
//                         icon='mail'
//                         iconPosition='left'
//                         value={email}
//                         placeholder='Email'
//                         required
//                     />
//                     <Form.Input
//                         type='password'
//                         onChange={this.handleChange}
//                         name='password'
//                         value={password}
//                         placeholder='Password'
//                         required
//                         icon='lock'
//                         iconPosition='left'
//                     />
//                     <Form.Input
//                         type='password'
//                         onChange={this.handleChange}
//                         name='confirmPassword'
//                         value={confirmPassword}
//                         placeholder='Re-enter Password'
//                         required
//                         icon='redo'
//                         iconPosition='left'
//                     />
//                     <Button color='linkedin' type='submit'>Submit</Button>
//                 </Form>

//                 <div className='box' >
//                     <div className='wave'></div>
//                     {/* <img className='sec-wave' src={logo} alt='shopping'/> */}
//                 </div>
                
            
//             </div>
//         )
//     }
// }

// export default Register


import React, { Component } from 'react'
import {auth, userDocument} from '../../firebase';
import {Form,Header, Button } from 'semantic-ui-react'
import './Register.scss'


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
            <div className='reg-cont'>
                <div className='reg-con-o'>
                <Form className='reg-form'>
                <Header as='h2' color='blue' textAlign='center' className='signInHeader'>
                             Register 
                        </Header>
                        <p style={{textAlign: 'center', marginBottom: 20}}>Sign in with email and password</p>
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
                    <Button fluid color='linkedin' type='submit'>Submit</Button>
                </Form>
                </div>

                <div className='reg-con-t'>
                        <div className='wave'/>
                </div>
                
            </div>
        )
    }
}

export default Register
