import Navbar from '../src/components/Navbar'
import { NextPage } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Box, Button, TextField } from '@material-ui/core'
import { Formik, Form, FormikHelpers } from 'formik'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textStyle:{
        width:'100%',
        marginBottom:'20px'
    },
    buttonStyle:{
        marginLeft:'10px'
    }
  }),
);

interface MypostVal {
    userId?:number,
    body:string,
    title:string
}




const createpost:NextPage = () => {
    const classes = useStyles();
    // const initialValues: MypostVal = {
    //     userId:null,
    //     body:'',
    //     title:''
    // };


    return(
        <>
        <Navbar />
        <Container>
         <h1>Create Post</h1>
        <Formik 
        initialValues={{
          title: '',
          body: '',
        }}onSubmit={(values:MypostVal,{ setSubmitting }: FormikHelpers<MypostVal>) =>
            console.log(values)
        }
        >
            <Form>
                <Box display="flex" flexDirection="column">
                <TextField name="userId" id="userId" onChange={formik.handleChange} value={formik.values.userId} className={classes.textStyle}  label="User ID" variant="outlined"/>
                <TextField name="title" id="title" onChange={formik.handleChange} value={formik.values.title} className={classes.textStyle}  label="Title" variant="outlined"/>
                <TextField
                    className={classes.textStyle}
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={10}
                    variant="outlined"
                    name="body"
                    onChange={formik.handleChange}
                    value={formik.values.body}
                    // onChange={.}
                    />
                    <Box display="flex" justifyContent="flex-end">
                        <Button className={classes.buttonStyle} variant="contained" color="primary">Back</Button>
                        <Button type="submit" className={classes.buttonStyle} variant="contained" color="primary">Submit</Button>
                    </Box>
                </Box>
            </Form>
        </Formik>
        </Container>
       
        </>
    )
}


export default createpost
