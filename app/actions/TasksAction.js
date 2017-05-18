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
    }
};

export default TasksActions;