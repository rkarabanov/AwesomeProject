import React from 'react';

import {
    Text,
    Navigator,
    Platform
} from 'react-native';

import { NavigationHelper, Screen } from 'rn-stack-router';

export default class MyFirstScreen extends Screen {
    constructor(props) {
        super(props);
    }

    static screenName() {
        return 'myscreen';
    }

    static routeName() {
        return '/myscreen';
    }

    static getDefaultProps() {
        return {
            defaultAnimation: Navigator.SceneConfigs.FadeAndroid,
            useCache: false,
            props: {
                id: 'something'
            }
        };
    }

    render() {
        return (
            <Text>Hello World</Text>
        );
    }
}