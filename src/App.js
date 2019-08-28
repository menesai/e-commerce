import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import {auth, userDocument} from './firebase'
import routes from './routes';

class App extends Component {
  constructor(){
    super();
    
    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

    componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
       if(user){
        const userRef = await userDocument(user)

        userRef.onSnapshot(snap =>{
          this.setState({
           currentUser: {
             id: snap.id,
             ...snap.data()
           }
          })
        })
       } else {
         this.setState({currentUser: user})
       }
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }

  render(){  
    const {currentUser} =this.state;
    console.log(currentUser)
    return (
       <div className="App">
         <Header currentUser={currentUser}/>
          {routes}
      </div>
    );
  }
  }

export default App;
