import styled from "styled-components"

export const LoginWrapper = styled.div`
    position: relative;
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1
`

export const Logo = styled.div`
    position: absolute;
    top: 56px;
    margin-left: 50px;
`

export const SignIn = styled.div`
    width: 300px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    label {
        display: block;
    }
`

export const SignUp = styled.div`

`

export const Header = styled.div`
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    font-weight: 400;
    color: #969696;
    a {
        padding: 10px;
    }
    .active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`

export const Main = styled.div`
    text-align: center;
    font-size: 14px;
    .userInfo{
        position: relative;
        width: 100%;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    box-sizing: border-box;
    &.username {
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
`
export const Submit = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`


export const Remember = styled.div`
    float: left;
    margin: 15px 0;
    span {
        margin-left: 5px;
        font-size: 15px;
        color: #969696;
        vertical-align: middle;
    }
`


export const Question = styled.div`
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
    a {
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }
`