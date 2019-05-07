import React,{ Component } from "react"
import { WriterWraper } from "../style"

class Writer extends Component{
   render(){
       return (
           <WriterWraper>
               <img alt="请求超时" className="writer-pic"
                  src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" 
                />
                <a className="app-link" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
                下载简书手机app >
                </a>
                <a className="description" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
                随时随地发现和创作内容
                </a>
           </WriterWraper>
       )
   }
}

export default Writer