import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import {StackRouter, StackNavigator} from 'react-navigation';
import LoginScreen from './app/components/Login';
import {MenuContext} from 'react-native-popup-menu';
import {ThemeProvider} from 'react-native-material-ui';
import { ContentStack} from './app/utils/Router'
import configureStore from './app/store/configureStore'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'

// class HomeScreen extends Component {
//     static navigationOptions = {
//         title: 'Welcome',
//     };
//
//     render() {
//         const {navigate} = this.props.navigation;
//         return <View><Text>Hello, Navigation!</Text><Button
//             onPress={() => navigate('Login')}
//             title="Chat with Lucy"
//         /></View>;
//     }
// }
//
// const SimpleApp = StackNavigator({
//     // Home: { screen: HomeScreen },
//     Login: {screen: LoginScreen},
// });


class App extends Component {

    render() {
        const uiTheme = {
            toolbar: {
                container: {
                    backgroundColor: "#07b1bc",
                },
            },
            actionButton: {
                speedDialActionLabelContainer: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    marginRight: 0,
                },
                speedDialActionLabel: {
                    color: '#fff',
                },
                speedDialActionIcon: {
                    backgroundColor: '#fff',
                },
                overlayContainer: {
                    backgroundColor: 'rgba(0,0,0,0.65)',
                },
            },
        };
        {/*<ThemeProvider uiTheme={uiTheme}>*/
        }

        {/*<Provider store={store}>*/}
        // const store = configureStore();
        {/*<MenuContext>*/}
        return (
            <MenuContext>
                        <ThemeProvider uiTheme={uiTheme}>
                            <ContentStack/>
                        </ThemeProvider>
            </MenuContext>
        );
    }

}


AppRegistry.registerComponent('AwesomeProject', () => App);

export default App;