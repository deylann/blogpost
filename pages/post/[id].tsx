import {GetServerSideProps } from 'next'
import Navbar from '../../src/components/Navbar'
import axios from 'axios';
import Post from '../../src/components/Post'
import { useSelector ,useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
// import { route } from 'next/dist/next-server/server/router'
type postType = {
    userId:number,
    id:number,
    title:string,
    body:string
}

type commentType = {
    postId:number,
    id:number,
    name:string
    email:string,
    body:string
}

function SinglePost({post,comments}) {
        return (<div>
           <Navbar/>
              <Post post={post} comments={comments}/>
           </div>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const res2 = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`)
    const result: postType = await res.data;
    const result2:commentType  = await res2.data;

    return{
        props:{
            post:result,
            comments:result2
        }
    }
}

// SinglePost.getInitialProps = async (ctx) => {
//     const { query } = ctx;
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
//     const res2 = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`)
//     const result = await res.data;
//     const result2 = await res2.data;

//     return{
//         post:result,
//         comments:result2
//     }
// }

export default SinglePost;
// function SinglePost({post,comments}){
//     // const dispatch = useDispatch();
//     // const router = useRouter();
//     // const { id } = router.query
//     // useEffect(() => {
//     //     if(id != undefined){
//     //         dispatch(fetchSinglePost(id));
//     //     }

//     // }, [router])
//     return (
//         <div>
//             <Navbar/>
//             <Post post={post} comments={comments}/>
//         </div>
//     )
// }



// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.data;

//     const paths = posts.map((post:PostType) => ({
//         params: {id: post.id.toString()}
//     }))


//     return {
//         paths,
//         fallback:true
//     }
// }

// export const getStaticProps: GetStaticProps = async ({params}) => {

//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const res2 = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
//     const post = await res.data;
//     const comments = await res2.data;

//     return {
//         props:{
//             post:post,
//             comments:comments
//         }
//     }
// }



// SinglePost.getInitialProps = ctx => {

//     const dispatch = useDispatch(function)
//     return {
//         fetchSinglePost: () => dispatch(fetchSinglePost())
//     }
// }

// const mapStateToProps = state => {
//     return {
//         post: state.singlePost
//     }
// }

// const mapDispatchToProps =  dispatch => {
//     return {
//         fetchSinglePost: () => dispatch(fetchSinglePost())
//     }
// }
    



