import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Const';

import api from '../api/api';

const TasksActions = {
    getTasks(data){
        console.log("getTasks");
        // console.log(data);
        console.log(Constants.GET_TASKS);
        return api.getUserTasks(data).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.GET_TASKS,
                data: data
            });
            if(typeof data === 'string'){
                return new Error();
            }
        })
    },
    changeTaskStatus(data) {
        // console.log(data);
        console.log(Constants.CHANGE_TASK_STATUS);
        return api.changeTaskStatus(data).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.CHANGE_TASK_STATUS,
                data: data
            });
            if(typeof data === 'string'){
                return new Error();
            }
        })
    },
    removeTask(data) {
        console.log(Constants.REMOVE_TASK);
        return api.removeTask(data).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.CHANGE_TASK_STATUS,
                data: data
            });
            if(typeof data === 'string'){
                return new Error();
            }
        })
    },
    addTask(data) {
        console.log(Constants.ADD_TASK);
        return api.addTask(data).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.ADD_TASK,
                data: data
            });
            if(typeof data === 'string'){
                return new Error();
            }
        })
    },
    changeTask(data) {
        console.log(Constants.CHANGE_TASK);
        return api.changeTask(data).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.CHANGE_TASK,
                data: data
            });
            if(typeof data === 'string'){
                return new Error();
            }
        })
    },
};

export default TasksActions;