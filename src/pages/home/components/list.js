import React, { PureComponent } from "react"
import { ListItem,ListInfo } from "../style"
import { connect } from "react-redux"

class List extends PureComponent{
   render(){
       const listItems = this.props.list.map((ele,index)=>(
        <ListItem key={index}>
            <img alt="请求超时" className="list-pic"
            src= {ele.get("imgUrl")} 
            />
            <ListInfo>
                <a className="title" 
                href={ele.get("linkUrl")}>{ele.get("title")}
                </a>
                <p className="content">{ele.get("content")}</p>
                {/* <Meta></Meta> */}
            </ListInfo>
        </ListItem>
       ))
       return (
          <div>
             {listItems}
          </div>           
       )
   }
}

const mapStateToProps = (state)=>({
    list:state.get("home").get("itemList")
})

export default connect(mapStateToProps,null)(List)