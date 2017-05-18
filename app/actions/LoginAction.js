import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Const';

import api from '../api/api';

const LoginActions = {
    login(data){
        console.log("login");
        // console.log(data);
        console.log(Constants.IS_LOGIN);
        return api.login(data).then((data)=>{
        Dispatcher.dispatch({
            type:Constants.IS_LOGIN,
            data: data
        });
            if(typeof data === 'string'){
           return new Error();
            }
    })
    },

    isInSystem(data){
        console.log("jwt");
        return api.inSystem({token:data}).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.IS_IN_SYSTEM,
                data: data
            });
        }).catch(err=>{console.log(err)})
    }
};



export default LoginActions;