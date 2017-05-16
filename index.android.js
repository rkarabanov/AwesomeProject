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
import { ContentStack,Route} from './app/utils/Router'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'




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

        return (
            <MenuContext>
                        <ThemeProvider uiTheme={uiTheme}>
                            <Route/>
                        </ThemeProvider>
            </MenuContext>
        );
    }

}


AppRegistry.registerComponent('AwesomeProject', () => App);

export default App;