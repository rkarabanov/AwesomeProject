import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/Dispatcher';
import  AppConstants from '../constants/Const';
import BasicStore  from "./BasicStore"

const CHANGE_EVENT = 'change';

let _tasks=null;
// class TasksStore extends BasicStore{
//
//     constructor() {
//         super();
//         this._tasks=null;
//         this._register();
//     }
//
//     _register(){
//         _this=this;
//
//     }
//
//
// }
const TasksStore=Object.assign({}, EventEmitter.prototype,{
    getTasks () {
        // console.log(_user);
        // this.emitChange();
        return _tasks;
    },
    emitChange:function () {
        this.emit(CHANGE_EVENT);
    },

});


AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.GET_TASKS:{
            // console.log(action.data);
            _tasks=action.data.data;
            TasksStore.emitChange();
            break;
        }
        default: {
            console.log('No such handler');
        }
    }
});


export default  TasksStore;