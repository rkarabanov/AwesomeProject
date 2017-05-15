import React, { Component } from 'react';
import { Form, TextValidator  } from 'react-native-validator-form';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,Button,
    NativeModules
} from 'react-native';

export default class LoginValidationForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            user:{email:'',password:''}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { user } = this.state;
        user.email = event.nativeEvent.text;
        this.setState({ user });
    }

    submit() {
        // your submit logic
    }

    handleSubmit() {
        this.refs.form.submit();
    }

    handlePassword(event) {
        const { user } = this.state;
        user.password = event.nativeEvent.text;
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
        return (
            <Form
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    name="email"
                label="email"
                    validators={['required','isEmail']}
                    errorMessages={['This field is required','Email invalid']}
                    placeholder="Your email"
                    type="email"
                    keyboardType="email-address"
                    value={user.email}
                    onChange={this.handleChange}

                />
                <TextValidator
                    name="password"
                label="text"
                    placeholder="Your Password"
                secureTextEntry={true}
                validators={['required']}
                    errorMessages={['This field is required']}
                    type="password"
                    value={user.password}
                    onChange={this.handlePassword}
                />
                <Button
                    title="Submit"
                     onPress={this.handleSubmit}
                />
            </Form>
        );
    }

}