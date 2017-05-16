import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/Const';

import api from '../api/api';

const RegActions = {
    reg(data){
        console.log("reg");
        console.log(data);
        console.log(Constants.IS_REG);
        return api.isReg(data).then((data)=>{
            Dispatcher.dispatch({
                type:Constants.IS_REG,
                data: data
            });
            if(typeof data === 'string'){
                return new Error();
            }
        })
    }
};

export default RegActions;