import React, { PropTypes } from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator,addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../components/Login';
import Dashboard from '../components/Dashboard';
import ForgotPass from '../components/ForgotPass';

export const ContentStack = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Dashboard:{
        screen: Dashboard,
    },
    ForgotPass:{
        screen: ForgotPass,
    }
});

// export const Login = StackNavigator({
//     Login: {
//         screen: LoginForm,
//     },
//     SignUp: {
//         screen: SignUp,
//     },
//     SocialLogin: {
//         screen: SocialLogin,
//     },
// }, {
//     headerMode: 'none',
// });

export const Route = DrawerNavigator({
    Content: {
        screen: ContentStack,
    },
});

// export const AppWithNavigationState = ({ dispatch, nav }) => (
//     <Route navigation={addNavigationHelpers({ dispatch, state: nav })} />
// );
//
// AppWithNavigationState.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     nav: PropTypes.object,
// };
//
// const mapStateToProps = state => ({
//     nav: state.nav,
// });
//
// export default connect(mapStateToProps)(AppWithNavigationState);