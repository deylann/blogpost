import {NextPage ,InferGetServerSidePropsType  } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// import Navbar from '../../src/components/Navbar'

interface Props{
    posts:any
}

type Data = {
    body:string,
    id:number,
    userId:number,
    title:string
}

const TestKey:NextPage<Props> = ({posts}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{
    console.log(posts);
    const router = useRouter()
    return router.isFallback ? (<div><h1>Loading...</h1></div>) :(
        <div>
            {posts.title}
        <Image
            src="/images/image.png"
            alt="Picture of the author"
            width={500}
            height={500}
        />
        </div>
    )
}


export const getServerSideProps = async (context:any) => {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.key}`)
    const posts: Data = await res.json()

    return {
        props:
        {
            posts
        }
    }
}


// export const getStaticProps: GetStaticProps = async ({params}) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.key}`);
//     const posts = await res.json()

//     return { props: {
//         posts,   revalidate: 1,
//     }}
// }
// export const getStaticPaths: GetStaticPaths = async () => {
//     const path = [
//         {params :{key:'1'}}, {params :{key:'2'}}
//     ];
//     // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     // const posts = await res.json()

//     // const paths = posts.map((post) => ({
//     //     params:{key: post.id.toString()}
//     // }))
//     console.log(path);

//     return { paths :path
//     ,fallback:true}
// }


export default TestKey
