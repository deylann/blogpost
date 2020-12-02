import {fetchPost} from './actionPostsType'
import {fetchSinglePost} from './actionSinglePostType'
// import {fetchSinglePost} from './actionSinglePostType'

export default {
    ...fetchPost,
    ...fetchSinglePost
}