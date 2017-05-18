import React, {Component, PropTypes} from 'react';
import {ListItem, Toolbar, Checkbox} from 'react-native-material-ui';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    ScrollView,
    NativeModules,
    IconToggle
} from 'react-native'
// import CheckBox from 'react-native-checkbox';

import TasksAction from '../actions/TasksAction'
import TasksStore from '../store/tasksStore'
// import UserStore  from '../store/userStore'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'

export default class ToDoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        // this.onCheck = this.onCheck.bind(this);
    }

    componentWillMount() {
        // console.log("LIST by:");
        // console.log(this.props.user.email);
        TasksAction.getTasks(this.props.user).then(() => {
                this.setState({
                    tasks: TasksStore.getTasks()
                });
            }
        ).catch((err) => {
            console.log("error");
            console.log(err);
        });
    }

    onCheck(i) {
        console.log(i);
        // console.log(this.props.tasks[e.target.value]);
        // this.props.changeTaskStatus({
        //     userID: this.props.user._id,
        //     pass: this.props.user.pass,
        //     note: this.props.tasks[e.target.value]
        // })
    }

    // list() {
    //     return ((this.state.tasks === undefined || this.state.tasks === null || this.state.tasks.length === 0)) ?
    //         <View/> :
    //         this.state.tasks.map((note) => {
    //             <ListItem divider
    //                       centerElement={note.task}
    //                       onPress={() => {
    //                       }}/>
    //         });
    // }

    render() {
        console.log('TODOLIST');
        _this = this;
        const {tasks} = this.state;
        let list = (tasks === undefined || tasks === null || tasks.length === 0) ?
            <View/> :
            tasks.map(function (note, index) {
                return <ListItem divider
                                 centerElement={<View style={{height: '100%'}}>

                                     <CheckBox style={{flex: 1, padding: 10}}
                                     onClick={()=>{_this.onCheck(index)}}
                                     isChecked={note.status}
                                               rightText={note.task}
                                               />
                                 </View>
                                 }
                                 rightElement={
                                     <Icon name="star"/>
                                 }
                                 // centerElement={note.task}
                                 // onPress={() => {
                                 // }}
                />
            });
        return <View>
            <ScrollView>
                {list}
            </ScrollView>
        </View>
    }

    componentDidMount() {
        this.setState({
            tasks: TasksStore.getTasks()
        });
    }
}

ToDoList.propTypes = {
    user: PropTypes.object
};