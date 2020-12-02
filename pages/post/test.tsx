import {NextPage} from 'next'
import Navbar from '../../src/components/Navbar'
import axios from 'axios';
import Post from '../../src/components/Post'

interface Props{
    posts:any,
    // comments:any
}

const SinglePost: NextPage<Props> = ({posts}) => {
    return (
        <div>
            <Navbar/>
            {/* <Post post={post} comments={comments} /> */}
            <ul>
                {posts.map(post => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}




export async function getStaticProps(){

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    // const paths = posts.map((post) => `/posts/${post.id}`)
        if(!posts){
            return {
                notFound: true,
              }
        }

    return { props: {
        posts,
        revalidate: 1
    }}
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
