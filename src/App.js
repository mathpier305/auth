import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm.js';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyABUND6QKJJLCD4WmpsRvTjlg-6MQah--A',
    authDomain: 'authentication-5b998.firebaseapp.com',
    databaseURL: 'https://authentication-5b998.firebaseio.com',
    projectId: 'authentication-5b998',
    storageBucket: 'authentication-5b998.appspot.com',
    messagingSenderId: '690958249314'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
       return (
         <Button onPress={() => firebase.auth().signOut()}>
         Log out
         </Button>
       );
      case false:
        return <LoginForm />;
      default:
        return (
          <Spinner size="large" />
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
