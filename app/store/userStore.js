import AppDispatcher from '../dispatcher/Dispatcher';
import  AppConstants from '../constants/Const';
import LocalStorage  from "../utils/LocalStorage"
import LoginAction from '../actions/LoginAction'
import BasicStore  from "./BasicStore"

import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change';
let _jwt = null;
let _user = null;

// class UserStore extends BasicStore {
//     constructor() {
//         super();
//
//         this._jwt = null;
//         this._user = null;
//         // this.loadFromMemory();
//         this._register();
//     }
//
//
//
//     // _register() {
//     //     _this = this;
//     //     AppDispatcher.register(function (action) {
//     //         switch (action.type) {
//     //             case AppConstants.IS_LOGIN: {
//     //                 _this._jwt = action.data.data.token;
//     //                 LocalStorage.setItem('jwt', _this._jwt);
//     //                 console.log(3);
//     //                 _this._user = action.data.data.user;
//     //                 _this.emitChange();
//     //             }
//     //                 break;
//     //             case AppConstants.IS_IN_SYSTEM: {
//     //                 if (action.data.data.success) {
//     //                     _this._jwt = action.data.data.token;
//     //                     _this._user = action.data.data.user;
//     //                     LocalStorage.setItem('jwt', _this._jwt);
//     //                     console.log(AppConstants.IS_IN_SYSTEM, _this._user.email);
//     //                 } else {
//     //                     console.log(false);
//     //                     _this._jwt = '';
//     //                 }
//     //                 _this.emitChange();
//     //                 break;
//     //             }
//     //             case AppConstants.IS_REG: {
//     //                 console.log(action.data.data.user.email);
//     //                 _this._user = action.data.data.user;
//     //                 _this.emitChange();
//     //                 break;
//     //             }
//     //
//     //             default: {
//     //                 console.log('No such handler');
//     //             }
//     //         }
//     //     });
//     // }
//
//
//     getUser() {
//         console.log("_user",_user);
//         return this._user;
//     }
//
//     getJwt(){
//         return this._jwt;
//     }
//     isLoggedIn() {
//         return this._jwt === null ? null : this._jwt !== '';
//     }
// }

// const UserStore=Object.assign({}, EventEmitter.prototype,{
//
// });

const UserStore=Object.assign({}, EventEmitter.prototype,{
    emitChange:function () {
        this.emit(CHANGE_EVENT);
    },
    getUser:function () {
        // console.log(_user);
        return _user;
    },

    getJwt(){
        return _jwt;
    },
    isLoggedIn() {
        return _jwt === null ? null : _jwt !== '';
    },
    hasItem() {
        return LocalStorage.hasItem('jwt').then((result) => {

                return result;
            }
        );
    },
    loadItem(){
     return   LocalStorage.getItem('jwt').then((jwt) => {
            console.log(0, jwt);
            _jwt = jwt;
            this.emitChange();
            // LoginAction.isInSystem(jwt);
            return jwt;
        });
    }
});

AppDispatcher.register(function (action) {
    switch (action.type) {
        case AppConstants.IS_LOGIN: {
            _jwt = action.data.data.token;
            LocalStorage.setItem('jwt', _jwt);
            console.log(3);
          _user = action.data.data.user;
            UserStore.emitChange();
        }
            break;
        case AppConstants.IS_IN_SYSTEM: {
            if (action.data.data.success) {
                _jwt = action.data.data.token;
                console.log("Data",action.data.data);
                _user = action.data.data.user;
                LocalStorage.setItem('jwt',_jwt);
                console.log(AppConstants.IS_IN_SYSTEM, _user.email);
            } else {
                console.log(false);
                _jwt = '';
            }
            UserStore.emitChange();
            break;
        }
        case AppConstants.IS_REG: {
            console.log(action.data.data.user.email);
            _user = action.data.data.user;
            UserStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default UserStore;