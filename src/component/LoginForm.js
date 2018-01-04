import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="user@gmail.com"
          label="email"
          value={this.state.text}
          onChangeText={email => this.setState({ email })}
          />
       </CardSection>

       <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
       </CardSection>

       <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
