import {combineReducers} from 'redux'

const counter=(state=0,action)=>{
    if(action.type==='INCREMENT'){
        //This will increase the vaule of counter by the vallue passed 
        return state+action.inc;
    }
    //Returns the current value of the counter 
    return state;
}

const myReducers = combineReducers({counter});

export default myReducers;