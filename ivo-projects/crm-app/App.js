import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/Login';
import Loader from './src/Loader';
import PeopleList from './src/PeopleList';

export default class App extends React.Component {
  state = { loggedIn: null};
  componentWillMount() {
    firebase.initializeApp( {
      apiKey: "AIzaSyC1jDXFCK3IdaWWeVpU1jCHUEOJuowAU3A",
      authDomain: "crm-app-aaa37.firebaseapp.com",
      databaseURL: "https://crm-app-aaa37.firebaseio.com",
      projectId: "crm-app-aaa37",
      storageBucket: "crm-app-aaa37.appspot.com",
      messagingSenderId: "630240709531"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
         this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <PeopleList />
      case false:
        return <Login />
      default:
        return <Loader size='large'/>
    }
  }

  render() {
    return (
      <View>
        {this.renderInitialView()}
      </View>
    );
  }
}

