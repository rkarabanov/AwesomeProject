import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    AppState
} from 'react-native';
import {MenuContext} from 'react-native-popup-menu';
import {ThemeProvider} from 'react-native-material-ui';
import { ContentStack,Route,Login} from './app/utils/Router'
import {Provider} from 'react-redux'
import UserStore from './app/store/userStore'
import {Router, browserHistory} from 'react-router'
import Const from './app/constants/Const'
import LoginAction from './app/actions/LoginAction'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAppState: AppState.currentState,
            logged:UserStore.isLoggedIn(),
            loading:Const.LOADING_WAITING
        };
    }

    componentDidMount() {
        let res =UserStore.hasItem();
        res.then((res)=>{
            console.log('res',res);
            res?
                UserStore.loadItem().then((jwt)=>{
                    console.log('jwt',jwt);
                    // this.setState({loading:Const.LOADING_FAIL})
                LoginAction.isInSystem(jwt).then(()=>{
            console.log("UserStore.isLoggedIn()");
            if(UserStore.getUser()===undefined||UserStore.getUser()===null){
                this.setState({loading:Const.LOADING_FAIL})
            }
            else {
            this.setState({logged:UserStore.isLoggedIn()});
            if(this.state.logged){
                this.setState({loading:Const.LOADING_SUCCESS});
                UserStore.emitChange();
            }else{
                this.setState({loading:Const.LOADING_FAIL});
                UserStore.emitChange();
            }
            console.log('loading',this.state.loading)}})}): this.setState({loading:Const.LOADING_FAIL});
        })
    }



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
console.log("preresnder", this.state.loading);
            console.log("preresnder", UserStore.getUser());
// console.log(UserStore.isLoggedIn());
        return (
            <MenuContext>
                        <ThemeProvider uiTheme={uiTheme}>
                            {Const.LOADING_WAITING===this.state.loading?<View/>:(this.state.logged) ? <Route /> : <Login /> }
                        </ThemeProvider>
            </MenuContext>
        );
    }

}


AppRegistry.registerComponent('AwesomeProject', () => App);

export default App;