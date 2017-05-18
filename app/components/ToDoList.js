import React, {Component, PropTypes} from 'react';
import {ListItem,  Checkbox,ActionButton,Toolbar } from 'react-native-material-ui';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button,
    ScrollView,
    NativeModules,
    TouchableOpacity,
    IconToggle
} from 'react-native'
// import CheckBox from 'react-native-checkbox';
import dateFormat from 'dateformat'
import TasksAction from '../actions/TasksAction'
import TasksStore from '../store/tasksStore'
// import UserStore  from '../store/userStore'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'
import CircleButton from 'react-native-circle-button';
import Modal from 'react-native-modal'
import {Form, TextValidator} from 'react-native-validator-form';
import dismissKeyboard from 'dismissKeyboard';

export default class ToDoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isModalVisible:false,
            curItem:{},
            isAdd:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submit = this.submit.bind(this);
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

    onCheck(e) {
        console.log("onEdit",e);
        // console.log(this.state.tasks[e]);

        TasksAction.changeTaskStatus({
            userID: this.props.user._id,
            pass: this.props.user.pass,
            note: this.state.tasks[e]
        }).then(() => {
                this.setState({
                    tasks: TasksStore.getTasks()
                });
                }
            ).catch((err) => {
            console.log("error");
            console.log(err);
        });
    }
    onEdit(i) {
        console.log("onEdit",i);
        this.setState({
            curItem:this.state.tasks[i]
        });
        this._showModal();
    }

    onDelete(i) {
        console.log("onDelete",i);
        TasksAction.removeTask({
            userID: this.props.user._id,
            pass: this.props.user.pass,
            note: this.state.tasks[i]
        }).then(() => {
                this.setState({
                    tasks: TasksStore.getTasks()
                });
            }
        ).catch((err) => {
            console.log("error");
            console.log(err);
        });
    }

    addItem(){
        console.log("addItem");
        this.setState({
            curItem:{title:"",task:""}
        });
        this._showModal();
        this.setState({isAdd:true});
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
    _showModal = () => this.setState({isModalVisible: true});

    _hideModal = () =>{ console.log("_hideModal");this.setState({isModalVisible: false}); this.setState({isAdd:false});dismissKeyboard();};

    handleChange(event) {
        const {curItem} = this.state;
        curItem.title = event.nativeEvent.text;
        // console.log(user.pass);
        this.setState({curItem});
    }

    submit() {
        // your submit logic
        console.log("SUBMIT");
        // const {user} = this.state;

        // LoginAction.login(user).then(() => {
        //         this.setState({ user: {email: '', pass: ''}});
        //         this.props.navigate('SignUp')
        //     }
        // ).catch((err) => {
        //     console.log("error");
        //     console.log(err);
        // });
        if(this.state.isAdd){
            TasksAction.addTask({
                userID: this.props.user._id,
                pass: this.props.user.pass,
                task:this.state.curItem.task,
                title:this.state.curItem.title
            }).then(() => {
                    this.setState({
                        tasks: TasksStore.getTasks()
                    });
                }
            ).catch((err) => {
                console.log("error");
                console.log(err);
            });
        }else {
            TasksAction.changeTask({
                userID: this.props.user._id,
                pass: this.props.user.pass,
                note: this.state.curItem,
                task:this.state.curItem.task,
                title:this.state.curItem.title
            }).then(() => {
                    this.setState({
                        tasks: TasksStore.getTasks()
                    });
                }
            ).catch((err) => {
                console.log("error");
                console.log(err);
            });
        }
        this._hideModal();
    }


    handleSubmit() {
        dismissKeyboard();
        if(this.refs.form){
            this.refs.form.submit();
        }
    }

    handlePassword(event) {
        const {curItem} = this.state;
        curItem.task = event.nativeEvent.text;
        // console.log(user.pass);
        this.setState({curItem});
    }

    render() {
        console.log('TODOLIST');
        _this = this;
        const {tasks} = this.state;
        let list = (tasks === undefined || tasks === null || tasks.length === 0) ?
            <View/> :
            tasks.map(function (note, index) {
                return <ListItem divider
                                 centerElement={<View style={{height: '100%', marginLeft:-20}}>

                                     <CheckBox style={{flex: 1, padding: 10}}
                                     onClick={()=>{_this.onCheck(index)}}
                                     isChecked={note.status}
                                               rightTextView={<View style={{marginLeft: 5}}>
                                                   <Text style={{fontWeight:'bold'}}>{note.title.toUpperCase()}{note.title.length>0?":":""} <Text style={{fontWeight:'normal'}}>{note.task}</Text></Text>
                                                   <Text>{"Изменён " +  dateFormat(note.updated_at, "mmmm dS, yyyy, h:MM")}</Text>
                                               </View>}
                                               />
                                 </View>
                                 }
                                 rightElement={<Text>
                                     <Icon name="pencil"
                                           onPress={()=>{_this.onEdit(index)}}
                                     /> <Text>
                                     <Icon name="remove"
                                           onPress={()=>{_this.onDelete(index)}}
                                     /></Text></Text>
                                 }

                />
            });
        return <View  style={styles.container}>

            <ScrollView style={{height:"80%"}}>
                {list}
            </ScrollView>
            <View   >
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalvalid}>
                        <Form
                            ref="form"
                            onSubmit={this.submit}
                        >
                            <TextValidator
                                name="email"
                                label="email"
                                validators={[]}
                                errorMessages={[]}
                                placeholder="Title"
                                type="text"
                                keyboardType="email-address"
                                value={_this.state.curItem.title}
                                onChange={this.handleChange}
                            />
                            <TextValidator
                                name="password"
                                label="text"
                                validators={['required']}
                                errorMessages={['This field is required']}
                                placeholder="Task"
                                type="text"
                                value={_this.state.curItem.task}
                                onChange={this.handlePassword}
                            />
                            <Button
                                title="Submit"
                                onPress={this.handleSubmit}
                            />
                            <View style={styles.button}>
                            <Button
                                title="Close"
                                onPress={()=>{_this._hideModal();}}
                            />
                            </View>
                        </Form>
                    </View>
                </Modal>
            <ActionButton icon="add" onPress={_this.addItem.bind(_this)}/>
            </View>

            </View>
    }

    componentDidMount() {
        this.setState({
            tasks: TasksStore.getTasks()
        });
    }
}

const styles = StyleSheet.create({
        modalvalid:{
            backgroundColor:'white',
            padding:10,
        },
        marginTop:{
            marginBottom:20,
        },
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
            marginTop:5
        },

        addButton:{
            borderRadius:5,
        },

        center:{
            justifyContent: 'center',
        },
    }
);

ToDoList.propTypes = {
    user: PropTypes.object
};