import React,{ Component } from "react"
// import ReactDOM from "react-dom"
import Header from "./common/header/header"
import { BrowserRouter,Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import Home from "./pages/home/index"
import Details from "./pages/detail/index"
import Login from "./pages/login/login"
import Write from "./pages/write/write"


class App extends Component {
  render(){
    return (
      <Provider store={store}>
        {/* BrowserRouter代表路由，Route代表路由规则 */}
        <BrowserRouter>  
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Details}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App