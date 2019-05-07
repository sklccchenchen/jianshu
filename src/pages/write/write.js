import React,{ PureComponent } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
// import { LoginWrapper,Logo,SignIn,Header,Main,Input,Remember,Question,Submit } from "./style"
// import * as actionCreator from "./store/actionCreator"

class Write extends PureComponent{
    render(){
        const { login } = this.props
        if(login){
            return (
                <div>
                    我是写文章页面！！
                </div>
            )
        }else{
           return <Redirect to="/login" />
        }
    }
}

const mapState = (state)=>({
    login: state.get("signin").get("signIn")
})

// const mapDispatch = (dispatch)=>({
//      handleSubmit(account,password){
//         //   console.log(account.value,password.value)
//         dispatch(actionCreator.createSign(account.value,password.value))
//      }
// })

export default connect(mapState,null)(Write)