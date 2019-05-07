import { fromJS } from "immutable"

//  immutable库
//  immutable对象

let defaultState = fromJS({
   topicList: [],
   itemList:[],
   recommandList:[],
   show: false
})   //fromJS会将对象转化成immutable对象，其中的数组也会转化成immutable数组


const reducer = (state=defaultState,action)=>{
    switch(action.type) {
        case "change_home_data":
        //    console.log(action)
           return state.merge({
               "topicList": fromJS(action.value.topicList),
               "itemList": fromJS(action.value.itemList),
               "recommandList": fromJS(action.value.recommandList) 
            })
        case "add_home_data":
            return state.set("itemList",state.get("itemList").concat(action.itemList))
        case "show_backpanel":
            return state.set("show",action.value)
        default: 
           return state
    }
}

export default reducer