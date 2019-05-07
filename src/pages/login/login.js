import React,{ PureComponent } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { LoginWrapper,Logo,SignIn,Header,Main,Input,Remember,Question,Submit } from "./style"
import * as actionCreator from "./store/actionCreator"

class Login extends PureComponent{
    render(){
        const { login } = this.props
        if(!login){
            return (
                <div>
                    <LoginWrapper>
                        <Logo>
                            <a href="/">
                               <img alt="请求超时" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" />
                            </a>
                        </Logo>
                        <SignIn>
                            <Header>
                                <a className="signin active">登录</a>
                                <a className="signup">注册</a>
                            </Header>
                            <Main>
                                <div className="userInfo">
                                    <Input className="username" placeholder="手机号或邮箱" ref={(input)=>{this.account = input}}/>
                                    <Input className="pass" placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
                                </div>
                                <Remember>
                                    <input type="checkbox" />
                                    <span>记住我</span>
                                </Remember>
                                <Question><a>登录遇到问题?</a></Question>
                                <Submit onClick={()=>{this.props.handleSubmit(this.account,this.password)}}>登录</Submit>
                            </Main>
                        </SignIn>
                    </LoginWrapper>
                </div>
            )
        }else{
           return <Redirect to="/" />
        }
    }
}

const mapState = (state)=>({
    login: state.get("signin").get("signIn")
})

const mapDispatch = (dispatch)=>({
     handleSubmit(account,password){
        //   console.log(account.value,password.value)
        dispatch(actionCreator.createSign(account.value,password.value))
     }
})

export default connect(mapState,mapDispatch)(Login)