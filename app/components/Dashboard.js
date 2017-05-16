import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,Button,
    NativeModules,
    Image
} from 'react-native';
import { Avatar } from 'react-native-material-ui';
import UserStore  from '../store/store'

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={
            user:{}
        };
    }

    componentWillMount() {
        if(UserStore.getUser()!==undefined||this.state.user!==null)
        this.setState({
            user:UserStore.getUser()
        });
        console.log('User:');
        console.log(this.state.user);
    }

    getEmail(){
        // console.log(this.state.user.data_uri);
        return this.state.user===undefined||this.state.user===null?'':this.state.user.email;
    }

    render(){
        return(
            <View style={styles.container}>
                    {/*<View  style={styles.textAlignCenter} >*/}
                {/*<Avatar image={<Image source={this.state.user.data_uri} />}/>*/}
                    {/*</View>*/}
                <Text style={styles.hello}>Dashboard, {this.getEmail()}</Text>

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
    button:{

        // backgroundColor: 'skyblue',

        width:'50%',
        justifyContent: 'center',
        marginLeft:'25%',

    },
    center:{
        justifyContent: 'center',
    },
    textAlignCenter:{
        textAlign: 'center'
    }
});