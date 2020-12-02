import axios from 'axios';
import * as actions from '../type';


export const fetchSinglePost = (id) => {
    console.log(id);
    return (dispatch:any) => {
        dispatch({
            type:actions.SINGLE_POST_REQUEST,
        });
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            
            const post = response.data
            axios.get(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                const comments = response.data
                dispatch({
                    type:actions.SINGLE_POST_SUCCESS,
                    payload:
                       {
                        post:post,
                        comments:comments
                       } 
                    
                })
            })
            
        }).catch(error => {
            const errorMsg = error.message
            dispatch({
                type:actions.SINGLE_POST_FAILURE,
                payload:errorMsg
            })
        })
    }
}
