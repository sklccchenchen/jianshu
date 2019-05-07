import React, { PureComponent } from "react"
import { TopicWrapper,TopicItem } from "../style"
import { connect } from "react-redux"

class Topic extends PureComponent{
    render(){
        const topicItems = this.props.list.map((item)=>(
            <TopicItem key={item.get("id")}>
                <img alt="请求超时"
                   className="topic-pic"
                   src={ item.get("imgUrl") } 
                />
                { item.get("title") }
            </TopicItem> 
        ))
        return (
            <TopicWrapper>
                {topicItems}
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get("home").get("topicList")
})

const mapDispatchToProps = (dispatch) =>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic)