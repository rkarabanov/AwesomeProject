import React,{Component} from 'react';
import { Button } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';

export default class Example extends Component {

    constructor(props) {
        super(props);

        this.state={
          email:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const email = event.nativeEvent.text;
        this.setState({ email });
    }

    submit() {
        console.log(this.state.email);
    }

    handleSubmit() {
        this.refs.form.submit();
        // console.log(this.state.email);
    }

    render() {
        const { email } = this.state;
        return (
            <Form
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    name="email"
                label="email"
                validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="Your email"
                    type="text"
                    keyboardType="email-address"
                    value={email}
                    onChange={this.handleChange}
                />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </Form>
        );
    }
}