import { combineReducers } from 'redux' 
import SinglePostReducer from '../reducers/SingPostReducer'
import PostReducer from '../reducers/PostsReducer'


const rootReducer = combineReducers({
    postData:PostReducer,
    singlePost: SinglePostReducer
})

export default rootReducer