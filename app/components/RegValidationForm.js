
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator, Button,
    NativeModules
} from 'react-native';
import {Form, TextValidator} from 'react-native-validator-form';
import dismissKeyboard from 'dismissKeyboard';


import RegAction from '../actions/RegAction'


export default class RegValidationForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: {email: '', pass: '',repeat:''}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        const {user} = this.state;
        user.email = event.nativeEvent.text;
        // console.log(user.email);
        this.setState({user});
    }

    submit() {
        // your submit logic
        console.log("SUBMIT");
        const {user} = this.state;

        RegAction.reg(user).then(() => {
                this.setState({ user: {email: '', pass: '',repeat:''}});
                this.props.navigate('Login')
            }
        ).catch((err) => {
            console.log("error");
            console.log(err);
        });
    }


    handleSubmit() {
        dismissKeyboard();
        if(this.refs.form){
            this.refs.form.submit();
        }
    }

    handlePassword(event) {
        const {user} = this.state;
        user.pass = event.nativeEvent.text;
        // console.log(user.pass);
        this.setState({user});
    }

    handleRepeatPassword(event) {
        const { user } = this.state;
        user.repeat = event.nativeEvent.text;
        this.setState({ user });
    }

    componentWillMount() {
        console.log("REG VALIDATION");
        dismissKeyboard();
        Form.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.pass) {
                return false;
            }
            return true;
        });
    }

    render() {
        const {user} = this.state;
        return (
            <Form
                ref="form"
                onSubmit={this.submit}
            >
                <TextValidator
                    name="email"
                    label="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="Your email"
                    type="text"
                    keyboardType="email-address"
                    value={user.email}
                    onChange={this.handleChange}
                />
                <TextValidator
                    name="password"
                    label="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    placeholder="Your Password"
                    secureTextEntry={true}
                    type="text"
                    value={user.pass}
                    onChange={this.handlePassword}
                />
                <TextValidator
                    name="repeatPassword"
                    label="text"
                    secureTextEntry={true}
                    placeholder="Repeat Password"
                    validators={['isPasswordMatch','required']}
                    errorMessages={['Password mismatch','This field is required']}
                    type="text"
                    value={user.repeat}
                    onChange={this.handleRepeatPassword}
                />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </Form>


        );
    }
}

RegValidationForm.propTypes = {
    navigate: PropTypes.func.isRequired
};