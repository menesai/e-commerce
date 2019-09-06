import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import {auth, userDocument} from './firebase'
import Routes from './Routes';
import {connect} from 'react-redux'
import {getCurrentUser} from './redux/users/userReducer'

class App extends Component {

  unsubscribeFromAuth = null

    componentDidMount(){
      const {getCurrentUser} = this.props;

     this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
       if(user){
        const userRef = await userDocument(user)

        userRef.onSnapshot(snap =>{
          getCurrentUser({
           currentUser: {
             id: snap.id,
             ...snap.data()
           }
          })
        })
       } else {
         getCurrentUser(user)
       }
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }

  render(){  
    // console.log(currentUser)
    return (
       <div className="App">
         <Header />
          {Routes}
      </div>
    );
  }
  }

  const mapDispatchToProps = (dispatch) => ({
    getCurrentUser: user => dispatch(getCurrentUser(user))
  })

export default connect(null, mapDispatchToProps)(App);
