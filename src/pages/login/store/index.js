import React,{ PureComponent } from "react"
import { connect } from "react-redux"
import { HomeWrapper,HomeLeft,HomeRight,More,Totop } from "./style"
import Topic from "./components/topic"
import List from "./components/list"
import Recommand from "./components/recommand"
import Writer from "./components/writer"
import * as actionCreator from "./store/actionCreator"

class Home extends PureComponent{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="请求超时"
                       className="banner" 
                       src="https://upload.jianshu.io/admin_banners/web_images/4652/f32e7f414d86d5a1709f8e6f00ec3272fd9f604b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
                    />
                    <Topic />
                    <List /> 
                    <More onClick={this.props.getMore}>阅读更多</More>
                </HomeLeft>
                <HomeRight> 
                    <Recommand /> 
                    <Writer />   
                </HomeRight>
                {this.props.show ? <Totop onClick={this.totop}>返回顶部</Totop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
       this.props.changeHomeData()
       this.bindEvent()
    }

}

const mapState = (state)=>({
    show: state.get("home").get("show")
})

const mapDispatch = (dispatch)=>({

})

export default connect(mapState,mapDispatch)(Home)