import * as actions from '../type'
import { produce } from 'immer';

export interface PostState {
    loading:boolean,
    posts: any,
    error:string
}

const initialState = {
    loading: false,
    posts: [],
    error:''
};

const SinglePostReducer = (state:PostState = initialState ,action:any) => {
    switch(action.type){
        case actions.SINGLE_POST_REQUEST:
            return produce(state,draftState => {
                draftState.loading = true
                draftState.posts = []
            })
        case actions.SINGLE_POST_SUCCESS:
            return produce(state,draftState => {
                draftState.loading = false
                draftState.posts = action.payload
            })
        case actions.SINGLE_POST_FAILURE:
            return produce(state,draftState => {
                draftState.loading = false
                draftState.error = action.payload
            })
            default:return state;
        
    }
}

export default SinglePostReducer;

