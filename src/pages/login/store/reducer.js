import { fromJS } from "immutable"

//  immutable库
//  immutable对象

let defaultState = fromJS({
    signIn: false
})   //fromJS会将对象转化成immutable对象，其中的数组也会转化成immutable数组


const reducer = (state=defaultState,action)=>{
    switch(action.type) {
        case "change_sign_status":
           return state.set("signIn",action.value)
        case "sign_out":
           return state.set("signIn",action.value)
        default: 
           return state
    }
}

export default reducer