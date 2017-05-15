import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,Button,
    NativeModules
} from 'react-native';
export default class ForgotPass extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render(){
        return(
            <View>
                <Text>Forgot Password</Text>
            </View>
        )
    }

}