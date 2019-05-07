import axios  from "axios"


export const changeStatusCreator =  ()=>({
    type: "change_sign_status",
    value: true
})

export const createSign = (account,pass)=>{
    return (dispatch)=>{
        axios.get("https://easy-mock.com/mock/5ccbe8080cfe960343d92ea1/example/jianshu/api/login").then((res)=>{
            console.log(res.data)
            dispatch(changeStatusCreator())
        }).catch((err)=>{
            console.log(err)
        })
    }
}