import Firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './component/common';
import LoginForm from './component/LoginForm.js';


class App extends Component {

  componentWillMount() {
    Firebase.initializeApp({
    apiKey: 'AIzaSyABUND6QKJJLCD4WmpsRvTjlg-6MQah--A',
    authDomain: 'authentication-5b998.firebaseapp.com',
    databaseURL: 'https://authentication-5b998.firebaseio.com',
    projectId: 'authentication-5b998',
    storageBucket: 'authentication-5b998.appspot.com',
    messagingSenderId: '690958249314'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="authentication" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
