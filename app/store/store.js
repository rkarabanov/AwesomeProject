import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/Dispatcher';
import  AppConstants from '../constants/Const';

const CHANGE_EVENT = 'change';

let _user=null;

const UserStore=Object.assign({}, EventEmitter.prototype,{
    emitChange:function () {
        this.emit(CHANGE_EVENT);
    },
    getUser:function () {
        // console.log(_user);
        return _user;
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.IS_LOGIN:
        case AppConstants.IS_REG:{
            console.log(action.data.data.user.email);
            _user=action.data.data.user;
            UserStore.emitChange();
            break;
        }


        default: {
            console.log('No such handler');
        }
    }
});

export default UserStore;