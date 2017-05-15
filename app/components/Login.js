/**
 * Created by r.karabanov on 5/11/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,Button,
    NativeModules
} from 'react-native';
import {ActionButton} from 'react-native-material-ui'
import LoginValidationForm from './LoginValidationForm'
import ForgotPassBtn from'./ForgotPassBtn'

import { COLOR, ThemeProvider } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application

export default class LoginScreen extends Component{
    static navigationOptions = {
        title: 'Авторизация',
    };
    onClick(){
        console.log("Click")
    }

    onPressBtn(){
        this.props.navigation.navigate('ForgotPass');
    }

    render(){
        const { navigate } = this.props.navigation;
        return(<View style={styles.container}>
                    <Text style={styles.hello}>Login</Text>
                    <View  style={styles.button} >
                        <LoginValidationForm/>
                    <View  style={styles.button} >
                    {/*<Button  title="It's good" onPress={this.onClick.bind(this)}/>*/}
                        <Button onPress={this.onPressBtn.bind(this)} title="Forgot">
                        </Button>
                    </View>
                    </View>
                </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button:{

        // backgroundColor: 'skyblue',

        width:'50%',
        justifyContent: 'center',
        marginLeft:'25%',

    },
    center:{
        justifyContent: 'center',
    },
}
);
