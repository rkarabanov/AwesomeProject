import React, { PropTypes } from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator,addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../components/Login';
import Dashboard from '../components/Dashboard';
import ForgotPass from '../components/ForgotPass';
import Example from '../components/Example';
import Reg from '../components/Reg';

export const ContentStack = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerLeft: null
        },
    },
    ForgotPass:{
        screen: ForgotPass,
    },
    Dashboard:{
        screen: Dashboard,
        navigationOptions: {
            title: "Dashboard",
            headerLeft: null
        },
    },
    Reg:{
        screen: Reg,
        navigationOptions: {
            headerLeft: null
        },
    },
    Example:{
        screen: Example,
        navigationOptions: {
            title: "Example",
            headerLeft: null
        },
    }
});


export const Route = DrawerNavigator({
    Content: {
        screen: ContentStack,
    },
});
