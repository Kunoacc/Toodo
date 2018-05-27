import React from 'react'
import {StyleSheet, Text, Button, StyleSheet, View, TextInput} from 'react-native';
import firebase from 'react-native-firebase';

export default class SignUp extends React.Component {
    state = {email: '', password: '', error: null}

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.props.navigation.navigate('RootComponent')
        }).catch((err) => {
            this.setState({error: err.message});
        });
        console.log('signUp Handled')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                {this.state.error && <Text style={{color: 'red'}}>
                    {this.state.error}
                </Text>}
                <TextInput placeholder="Email"
                           autoCapitalize="none"
                           style={styles.textInput}
                           onChangeText={email => this.setState({email})}
                           value={this.state.password}/>
                <Button title="Sign Up" onPress={this.handleSignUp()}/>
                <Button title="Go to Login" onPress={ () => this.props.navigation.navigate('Login') }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
});