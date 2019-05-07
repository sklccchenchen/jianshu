import { combineReducers } from "redux-immutable"
import headerReducer from "../common/header/reducer"
import homeReducer  from "../pages/home/store/reducer"
import signReducer from "../pages/login/store/reducer"


//将reducer拆成很多子reducer，最后进行合并
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    signin: signReducer
})