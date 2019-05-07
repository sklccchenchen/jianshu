import React,{ Component } from "react"
import { connect } from "react-redux"
import { Globalstyle } from '../../style';
import { Iconfont } from '../../iconfont';
import { HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button,SearchInfo,
    SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,ItemWrapper } from "./style.js"
import * as actionCreator from "../../store/actionCreator"
import { CSSTransition } from "react-transition-group"
import { Link } from "react-router-dom"

class Header extends Component { 
    render(){
        const { isFocused,searchList,mouseIn,handleInputFocus,handleInputBlur,signIn,signOut } = this.props
        return (
            <div>
              <Globalstyle />
              <Iconfont />
              <HeaderWrapper>
                  <Link to="/">
                      <Logo href="/" />
                  </Link>
                  <Nav>
                    <Link to="/">
                    <NavItem className="left active" href="/">首页</NavItem>
                    </Link>
                    <NavItem className="left" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps">下载App</NavItem>
                    { signIn ? <NavItem onClick={ signOut } className="right">注销</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>}
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                       <CSSTransition in={isFocused} timeout={600} classNames="slide">
                           {/* 作用机理：在某些特定的时刻在navSearch组件上自动增加一些样式  如：slide-enter,slide-exit,slide-enter-active等 */}
                           <NavSearch className={isFocused ? "focused" : "nofocused"}
                               onFocus = {()=>{handleInputFocus(searchList)}} onBlur={handleInputBlur}></NavSearch>
                       </CSSTransition>  
                           <span className={isFocused ? "focused iconfont search" : "iconfont search"}>&#xe600;</span>  
                       {this.switchSearchInfo(isFocused || mouseIn)}
                    </SearchWrapper>
                  </Nav>
                  <Addition>
                    <Link to="/write">
                        <Button className="active"><span className="iconfont ">&#xe603;</span>写文章</Button>
                    </Link>
                    <Button>注册</Button>
                  </Addition>  
              </HeaderWrapper>
            </div>
          )
    }
    switchSearchInfo(show){
        const { searchList,page,totalPage,handleMouseEnter,handleMouseLeave,changeTopic } = this.props
        const topicItem = []
        for(let i=page*8;i<8*(page+1);i++){
            topicItem.push(searchList[i]?<SearchInfoItem key={searchList[i]}>{searchList[i]}</SearchInfoItem>:null)
        }
        if(show){
            return (
             <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                 <SearchInfoTitle>
                     热门搜索
                     <SearchInfoSwitch onClick={()=>{changeTopic(page,totalPage,this.spinIcon)}}>
                     {/* ref获取组件渲染的真实DOM节点 */}
                          <span ref = {(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe71c;</span>换一批</SearchInfoSwitch>
                 </SearchInfoTitle>
                 <ItemWrapper>
                     {/* {searchList.map(ele=>(<SearchInfoItem key={ele}>{ele}</SearchInfoItem>))} */}
                     { topicItem }
                 </ItemWrapper>
             </SearchInfo>
            )
        }else{
            return null
        }
     }
}


const mapStateToProps = (state)=>{
    return {
        isFocused: state.get("header").get("isFocused"),
        searchList: state.get("header").get("searchList"),
        page: state.get("header").get("page"),
        mouseIn: state.get("header").get("mouseIn"),
        totalPage: state.get("header").get("totalPage"),
        signIn: state.get("signin").get("signIn")
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(searchList){
           searchList.size === 0 && dispatch(actionCreator.get_searchList())
           dispatch(actionCreator.createFocusAction())
        },
        handleInputBlur(){
            dispatch(actionCreator.createBlurAction())           
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter())     
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        changeTopic(page,totalPage,spinIcon){
            // console.log(spinIcon)
            // console.log("当前页码为：" + page)
            page = (++page)%totalPage
            // console.log("当前页码为：" + page)
            dispatch(actionCreator.changeTopic(page))
        },
        signOut(){
            dispatch(actionCreator.signOut())
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)


// class Header extends React.Component{
//   constructor(props){
//     super(props)
//     // this.state = {
//     //   isFocused: false
//     // }
//     // this.handleInputFocus = this.handleInputFocus.bind(this)
//     // this.handleInputBlur = this.handleInputBlur.bind(this)
//   }
//    render(){
//      return (

//      )
//    }
//    handleInputFocus(){
//      this.setState({
//         isFocused: true
//      })
//    }
//    handleInputBlur(){
//      this.setState({
//        isFocused: false
//      })
//    }
// }