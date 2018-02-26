import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MkColor, MkButton } from 'react-native-material-kit';
import Loader from './Loader'
import firebase from 'firebase';


const LoginButton = MKButton.coloredButton()
    .withText('Login')
    .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop:20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },
});


export default class Login extends React.Component {
  
   state = {
    email: '',
    password: '',
    login: false,
    error: '',
   };

   onButtonPress() {
       this.setState({error: '', loading: true});

       firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSucces.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onAuthSucces.bind(this))
                    .catch(this.onAuthFailed.bind(this))
            });
   }

   onAuthSucces() {
       this.setState({
        email: '',
        password: '',
        login: false,
        error: '',
       });
   }

   onAuthFailed() {
       this.setState({
           error: 'Authentication failed',
           loading: false
       })
   }

   renderLoader() {
       if(this.state.loading) {
        <Loader size='large' />
       } else {
        <LoginButton onPress={this.onButtonPress.bind(this)}></LoginButton>
       }
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login or create an account</Text>
        <MkTextField 
            text={this.state.email}
            onTextChange={email => this.setState{{ email }} }
            textInputStyle={fieldStyles}
            placeholder={'Email....'}
            tintColor={MkColor.Teal} 
        />
        <MkTextField 
            text={this.state.password}
            onTextChange={password => this.setState{{ password }} }
            textInputStyle={fieldStyles}
            placeholder={'Password....'}
            tintColor={MkColor.Teal} 
            password={true}
        /> 
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
        <View style={loginButtonArea}>
            {this.renderLoader()}
        </View>
      </View>
    );
  }
}


