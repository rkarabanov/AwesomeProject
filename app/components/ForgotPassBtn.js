import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    NativeModules
} from 'react-native';
export default class Dashboard extends Component {

    onPressBtn(){
        this.props.navigation.navigate('ForgotPass');
    }
    render(){

        return(
            <Button onPress={this.onPressBtn.bind(this)} title="Forgot">
            </Button>
        )
    }

}