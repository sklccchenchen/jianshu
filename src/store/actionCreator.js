import axios from "axios"

export const createFocusAction = ()=>({
    type: "get_focus"
})

export const createBlurAction = ()=>({
    type: "lose_focus"
})

export const mouseEnter = ()=>({
    type: "mouse_enter"
})

export const mouseLeave = ()=>({
    type: "mouse_leave"
})

export const changeTopic = (page)=>({
    type: "change_topic",
    nextPage: page
})

export const get_searchList = ()=>{
    return (dispatch)=>{
        axios.get('https://easy-mock.com/mock/5c1e4774e8bfa547414a52fe/hunger2/api/hotTopic.json')
        .then(function (res) {
          // handle success
          const action = {
              type: "change_list",
              value: res.data
          }
          dispatch(action)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
}

export const signOut = ()=>({
     type: "sign_out",
     value: false
})