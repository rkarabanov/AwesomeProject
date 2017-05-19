import React, {Component} from 'react'
import {Toolbar,Button } from 'react-native-material-ui';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    NativeModules,
    Image
} from 'react-native';
import {Avatar} from 'react-native-material-ui';
import UserStore  from '../store/userStore'
import  ToDoList  from './ToDoList'
import Const from '../constants/Const'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentWillMount() {
        // let interval = setInterval(function () {
            if (UserStore.getUser() !== undefined || this.state.user !== null) {
                this.setState({
                    user: UserStore.getUser()
                });
                //     console.log("Dashboard:");
                //     console.log(this.state.user);
                //     clearInterval(interval);}
                // }.bind(this), 500);


            }
    }

    getUser() {
        // console.log(UserStore.getUser());
    }

    getEmail() {
        return this.state.user === undefined || this.state.user === null ? '' : this.state.user.email;
    }

    getTodoList() {
        return this.getEmail() === '' ? <View/> : <ToDoList user={this.state.user}/>
    }

    render() {
        // console.log(UserStore.getUser());
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar
                    centerElement={"Dashboard, "+this.getEmail()}
                    rightElement={
                         <Button
                            text=""
                            icon="exit-to-app"
                           style={{ text: { color: 'white' } }}
                            // onPress={()=>{console.log("Login");navigate("Login");}}
                         />
                     }
                    />
                {/*<Text style={styles.hello}>Dashboard, {this.getEmail()}</Text>*/}
                {/*<Button title="das" onPress={() => {*/}
                    {/*this.getUser()*/}
                {/*}}/>*/}
                <ToDoList user={this.state.user}/>
                {/*{this.getTodoList()}*/}
                {/*<Button  title="user" onPress={()=>console.log(this.state.user)} />*/}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {

        // backgroundColor: 'skyblue',

        width: '50%',
        justifyContent: 'center',
        marginLeft: '25%',

    },
    center: {
        justifyContent: 'center',
    },
    textAlignCenter: {
        textAlign: 'center'
    }
});