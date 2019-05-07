import { fromJS } from "immutable"

//  immutable库
//  immutable对象

let defaultState = fromJS({
    isFocused: false,
    mouseIn: false,
    searchList: [],
    page: 0,
    totalPage: 3
})   //fromJS会将对象转化成immutable对象，其中的数组也会转化成immutable数组


const reducer = (state=defaultState,action)=>{
    switch(action.type) {
        case "get_focus": 
           return state.set("isFocused",true)
        case "lose_focus": 
           return state.set("isFocused",false)
        case "change_list":
           return state.set("searchList",action.value)
        case "mouse_enter":
           return state.set("mouseIn",true)
        case "mouse_leave":
           return state.set("mouseIn",false)
        case "change_topic":
           return state.set("page",action.nextPage)
        default: 
           return state
    }
    // // let newState = JSON.parse(JSON.stringify(state))
    // if(action.type === "get_focus"){
    //     // newState.isFocused = true
    //     // return newState
    //     return state.set("isFocused",true)
    // }
    // if(action.type === "lose_focus"){
    //     return state.set("isFocused",false)
    // }
    // if(action.type === "change_list"){
    //     return  state.set("searchList",action.value)
    // }
    // return state
}

export default reducer