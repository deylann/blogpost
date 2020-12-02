import React,{ useEffect,useState } from 'react'
import { fetchPost } from '../../redux/actions/actionPostsType'
import { fetchSinglePost } from '../../redux/actions/actionSinglePostType'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './PostData.module.scss'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Link from 'next/link';
import actions from '../../redux/actions';


type postDetails = {
    title:string,
    id:number,
    body:string,
    userId:number
}

function PostData({postData ,fetchPosts}) {
    console.log(postData);
    const [page, setPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(10);
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postData.posts.slice(indexOfFirstPost,indexOfLastPost);
    const posts = Math.ceil(postData.posts.length / postsPerPage)
    const handleChange = (event ,value:number) => {
        // change page number
        setPage(value);
      };
    useEffect(() =>{
        fetchPosts()
    }, [fetchPosts]);
    return postData.loading ? (
        <CircularProgress className={styles.testLoader}/>
    ) : (
        <Container className={styles.container}>
            <Typography variant="h2" component="h1">
                Articles
            </Typography>
            {/* <Grid container className={styles.cardContainer} spacing={3}> */}
            {currentPosts.map((e:postDetails,i:number) =>(
                // <Grid key={i} className={styles.card__item}>
                <Box my={4}>
                        <Card  key={i}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            {e.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {e.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={`post/${e.id}`}
                            ><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>
                 </Box>
            ))}
            <Box my={4} className={styles.paginationContainer}>
                <Pagination page={page} count={posts} onChange={ handleChange } color="primary" defaultPage={1}/>
            </Box>
        </Container>
    
    )
}


const mapStateToProps = state => {
    return {
        postData: state.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPost())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostData)