import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    NativeModules
} from 'react-native';
import RegValidationForm from './RegValidationForm'
import ForgotPassBtn from'./ForgotPassBtn'
import UserStore from '../store/userStore'

import { COLOR, ThemeProvider } from 'react-native-material-ui';


export default class Reg extends Component{
    static navigationOptions = {
        title: 'Регистрация',
    };

    onPressBtn(){
        this.props.navigation.navigate('Login');
    }

    render(){
        const { navigate } = this.props.navigation;
        return(<View style={styles.container}>
            <Text style={styles.hello}>Registration</Text>
            <View  style={styles.button} >
                <RegValidationForm navigate={navigate}/>
                <View  style={styles.marginTop} >
                    <Button onPress={this.onPressBtn.bind(this)} title="Login"/>
                </View>
            </View>
        </View>)
    }



}

const styles = StyleSheet.create({
        marginTop:{
            marginTop:10
        },
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
