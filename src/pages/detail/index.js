import React,{ Component } from "react"
import { ContentWrapper } from "./style"

class Details extends Component{
    render(){
        return (
            <div>
               <ContentWrapper>
                   <h1>拯救你的拍照尴尬症，女生如何把自己拍得漂亮</h1>
                   <p>不管是男同胞女同胞，都希望自己的拍照技术能过关，能把自己和被拍的对象拍得好看，特别是女孩子，天生都是爱美的，在拍照这件事上是绝对不会马虎的，都想拯救自己的拍照尴尬症，都想把自己拍得漂亮。</p>
                   <img className="pic_1" 
                      src="https://upload-images.jianshu.io/upload_images/13429656-bab7396f26589c52.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/960/format/webp"
                      alt="请求超时"
                    />
                </ContentWrapper>
            </div>
        )
    }
}

export default Details