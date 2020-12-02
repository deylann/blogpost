import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Card,CardContent,Typography,Grid, Container } from '@material-ui/core' 
import Link from 'next/link'
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './PostData.module.scss'
function Post({post,comments}) {

 
    // const postsData = useSelector(state => state.singlePost)
    // const { post } = postsData.posts
    // const { comments } = postsData .posts 
    // console.log(post)
    return (
        <Container className={styles.container}>
        <Box display="flex" justifyContent="space-between" p={2} my={3}>
            <Link href="/">
                <Button className={styles.back__button} variant="contained" color="primary">Back</Button>
            </Link>
            <Link href="/">
                <Button className={styles.back__button} variant="contained" color="primary">Edit</Button>
            </Link>
        </Box>
       
       { post && <Card className={styles.card__post}>
           <CardContent>
               <Typography color="textSecondary">
                   Post #{post.id}
               </Typography>
               <Typography variant="h5">
                   {post.title}
               </Typography>
               <Typography>
                   {post.body}
               </Typography>
              
               <Box my={4}>
                <hr/>
               All Comments
               {
                   comments.map((comment, index) => (
                       <Box my={5} key={index}> 
                           <Card>
                               <CardContent>
                                   <Typography variant="h6">
                                   {comment.name}
                                   </Typography>
                                   <Typography className={styles.comment__body}>
                                       {comment.body}
                                   </Typography>
                               </CardContent>
                           </Card>
                       </Box>
                   ))
               }
               </Box>
           </CardContent>
       </Card>
       }
        </Container> 
    )
   
    
    
}

export default Post
