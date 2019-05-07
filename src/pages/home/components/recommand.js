import React,{ PureComponent } from "react" 
import { RecommandWrapper,RecommandItem } from "../style"
import { connect } from "react-redux"

class Recommand extends PureComponent{
    render(){
        const RecommandItems = this.props.list.map((ele)=>(
            <RecommandItem href={ele.get("linkUrl")} key={ele.get("id")}>
                <img alt="请求失败" className="recommand-pic"
                src={ele.get("imgUrl")} 
                />
            </RecommandItem>
        ))
        return (
            <RecommandWrapper>
               {RecommandItems}
            </RecommandWrapper>
        )
    }
}

const mapState = (state)=>({
   list: state.get("home").get("recommandList") 
})

export default connect(mapState,null)(Recommand)