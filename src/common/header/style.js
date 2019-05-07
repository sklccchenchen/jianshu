import styled from 'styled-components';
import LogoImg from "../../static/logo.png"


export const HeaderWrapper  = styled.div`
   height: 56px;
   border-bottom:1px solid #ccc;
   position:relative;
`    

export const Logo = styled.a`
   display: inline-block;
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100px;
   background: url(${LogoImg});
   background-size: contain;
`

export const Nav = styled.div`
   width: 900px;
   height: 100%;
   margin-left: 100px;
`

export const NavItem = styled.a`
   line-height: 56px;
   padding: 0 15px;
   font-size: 17px;
   cursor: pointer;
   text-decoration: none;
   &.left {
      float: left;
      color: #333;
   }
   &.active{
      color: #ea6f5a;
   }
   &.left:hover{
      background: #ccc;
   }
   &.right {
      float: right;
      color: #969696;
   }
`
export const SearchWrapper = styled.div`
   position: relative;
   float: left;
   margin-left: 20px;
   .iconfont.search {
      position: absolute;
      right: 12px;
      bottom: 8px;
      font-size: 16px;
      padding: 3px;
      border-radius: 10px;
   }
   .focused.iconfont {
      background: #777;
      color: #fff;
   }
`
export const SearchInfo = styled.div`
   position: absolute;
   background-color: #fff;
   box-shadow: 0 0 8px rgba(0,0,0,.2);
   width: 220px;
   margin-top: 9px;
   left: 0;
   top: 100%;
   border-radius: 4px;
   padding: 20px 20px 10px;
   border-bottom: 1px solid #f0f0f0;
   z-index: 5;
`

export const SearchInfoTitle  = styled.div`
   float: left;
   font-size: 14px;
   color: #969696;
   width: 100%;
`

export const SearchInfoSwitch = styled.span`
   float: right;
   font-size: 13px;
   color: #969696;
   background-color: transparent;
   border-width: 0;
   padding: 0;
   cursor: pointer;
   .spin {
      display: block;
      float:left;
      font-size: 16px;
      margin-right: 2px;
      transition: all .2s ease-in;
      transform: rotate(30deg);
   }
`
export const ItemWrapper = styled.div`

`
export const SearchInfoItem = styled.span`
    margin-right: 10px;
    display: inline-block;
    line-height: 20px;
    margin: 0 3px;
    margin-top: 12px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`

export const NavSearch = styled.input.attrs({
   placeholder: "搜索"
})`
   width: 130px;
   height: 38px;
   font-size: 14px;
   border:none;
   outline: none;
   border-radius: 19px;
   padding: 0 20px;
   margin-top: 9px;
   background: #eee; 
   &::placeholder {
      color: "#999"
   }
   &.focused {
      width: 165px;
   }
   &.slide-enter {
      transition: all .6s ease-out;
   }
   &.silde-enter-active {
      width: 190px;
   }
   &.slide-exit {
      transition: all .6s ease-out;
   }
   &.slide-exit-active {
      width: 130px;
   }
`

export const Addition = styled.div`
   position: absolute;
   height: 56px;
   right: 0;
   top: 0;
`

export const Button = styled.button`
   border: 1px solid #ec6149;
   font-size: 15px;
   border-radius: 19px;
   height: 38px;
   margin: 9px 15px;
   padding: 4px 24px;
   float: right;
   background: rgba(236,97,73,.05);
   color: #ec6149;
   cursor: pointer;
   &.active{
      background: #ea6f5a;
      color: #fff;
   }
`