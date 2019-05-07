import axios from "axios"
import { fromJS }  from "immutable"

export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get("https://easy-mock.com/mock/5ccbe8080cfe960343d92ea1/example/data/homepage").then((res)=>{
            //    console.log(res.data)
            const data = res.data.data
            const action = {
                type: "change_home_data",
                value: {
                    itemList: data.itemList,
                    recommandList: data.recommandList,
                    topicList: data.topicList
                }
            }
            dispatch(action)
       })
    }
}

export const getMore = ()=>{
    return (dispatch)=>{
        axios.get("https://easy-mock.com/mock/5ccbe8080cfe960343d92ea1/example/data/homepage").then((res)=>{
            //    console.log(res.data)
            const data = res.data.data
            const action = {
                type: "add_home_data",
                itemList: fromJS(data.itemList)
            }
            dispatch(action)
       })
    }
}