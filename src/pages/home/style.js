import styled from "styled-components"

export const HomeWrapper = styled.div`
  overflow:hidden;
  padding-top: 40px;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
   width: 625px;
   margin-left:15px;
   float:left;
   .banner {
       height: 270px;
       width: 100%;
   }
`

export const HomeRight = styled.div`
   width: 260px;
   margin-left: 680px;
`

export const TopicWrapper = styled.div`
   overflow: hidden;
   width: 100%;
   padding: 20px 0 10px 0;
   margin-left: -18px;
`

export const TopicItem = styled.span`
   float: left;
   height: 30px;
   margin-left: 18px;
   line-height: 30px;
   font-size: 12px;
   border: 1px solid #dcdcdc;
   border-radius: 2px;
   background: #f7f7f7;
   margin-top: 6px;
   padding-right: 14px;
   .topic-pic {
       float: left;
       width: 32px;
       height: 30px;
       margin-right: 12px;
   }
`

export const ListItem = styled.div`
   overflow: hidden;
   width: 100%;
   padding: 15px 2px 20px 0;
   border-bottom: 1px solid #f0f0f0;
   .list-pic {
       width: 150px;
       height: 100px;
       border-radius: 4px;
       border: 1px solid #f0f0f0;
       float: right;
   }
`

export const ListInfo = styled.div`
    padding-right: 165px;
    .title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
        text-decoration: none;
    }
    .title:visited {
        color: #969696;
    }
    .content {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const RecommandWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`

export const RecommandItem = styled.a.attrs(({ href }) => ({
    href
  }))`
     cursor: pointer;
    .recommand-pic {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`

export const WriterWraper = styled.div`
    overflow: hidden;
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .writer-pic {
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
        float:left;
    }
    .app-link {
        font-size: 15px;
        color: #333;
        cursor: pointer;
        padding-top: 14px;
    }
    .description {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
        cursor: pointer;
    }
    a {
        display:block;
        text-decoration: none;
        margin-left: 68px;
    }
`
export const More = styled.div`
    width: 100%;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    background: #a3a3a3;
    border-radius: 15px;
    cursor: pointer;
`

export const Totop = styled.a`
    display: block;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    text-decoration: none;
    color: red;
    background: #a3a3a3;
    border-radius: 15px;
    position: fixed;
    right: 50px;
    bottom: 50px; 
    cursor: pointer;
`