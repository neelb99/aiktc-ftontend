import React,{useState} from 'react'
import {Grid, Hidden} from '@material-ui/core';
import CustomContainer from '../Container.js'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Avatar,Typography,Button} from '@material-ui/core'
import Loader from './Loader'
import Alert from '@material-ui/lab/Alert';

const ImageChecker = ()=>{
	const [submitted,setSubmitted] = useState(false)
	const [news,setNews] = useState('')
	const [file,setFile] = useState([])
	const [status,setStatus] = useState('')
	const [alertText,setAlertText] = useState('')
	const [loading,setLoading] = useState(false)
	const useStyles = makeStyles(theme => ({
    paper: {
      margin: theme.spacing(5, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formControl: {
          minWidth: "100%",
          marginTop:"2%"
        },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
		uploadBtnWrapper:{
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
    },
    btn: {
    	marginTop:"10px",
    	marginBottom:"10px",
      border: '2px solid gray',
      color: 'gray',
      backgroundColor: 'white',
      padding:' 4px 10px',
      borderRadius: '8px',
      fontSize: '20px',
      fontWeight: 'bold',
      width:"100%"

    },
    
    file:{
      fontSize: '100px',
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0,
    }
	}));
	const getAlert = ()=>{
		if(submitted)
	        return <Alert style={{width:"100%",marginTop:"5px",marginBottom:"5px"}} severity={status}>{alertText}</Alert>
	}
	const handleFileChange = e=>setFile(e.target.files[0]);
	const handleSubmit = async e=>{
		e.preventDefault()
		const formData = new FormData();
		setLoading(true)
		if(news==='' && file.length===0)
			alert('Upload an Image!')
		else if(news===''){
			formData.append('image',file)
			const response = await fetch("https://verifyimage.herokuapp.com/api/verifyimage",
			{
        		body: formData,
        		method: "post"
    		});
    		const data = await response.json()
    		if(data==='Image seems to be original'){
    			setStatus("success")
    			setAlertText("The Image seems to be Original")

    		}
    		else if(data==='Image is probably computer generated!'){
    			setStatus("warning")
    			setAlertText("Image is probably computer generated!")
    		}
    		else{
    			setStatus("error")
    			setAlertText("The image seems to be Edited")
    		}
    		setSubmitted(true)
		}
		else if(file.length===0)
			console.log("only text")
		else{
			formData.append('image',file)
			const response = await fetch("https://verifyimage.herokuapp.com/api/verifyimage",
			{
        		body: formData,
        		method: "post"
    		});
    		const data = await response.json()
    		if(data==='Image seems to be original'){
    			setStatus("success")
    			setAlertText("The Image seems to be Original")
    		}
    		else if(data==='Image is probably computer generated!'){
    			setStatus("warning")
    			setAlertText("Image is probably computer generated!")
    		}
    		else{
    			setStatus("error")
    			setAlertText("The image seems to be Edited")
    		}
    		setSubmitted(true)
		}
		setLoading(false)
	}

	const classes = useStyles();
	return(
		<CustomContainer>
			<Grid container style={{minHeight:"80vh"}}>
				<Hidden smDown>
					<Grid item sm={3}/>
				</Hidden>
				<Grid item xs={12} md={6}>
					<div className={classes.paper}>
	  				<Avatar style={{backgroundColor:"#3f51b5",marginBottom:"10px"}}>
	    				<ImageSearchIcon style={{color:"white"}}/>
	  				</Avatar>
	  				<Typography component="h1" variant="h5">
	    				Image Checker
	  				</Typography>
	        	<form onSubmit={handleSubmit} className={classes.form}>
	        		{getAlert()}
	        		<div className={classes.uploadBtnWrapper}>
	        			<Button className={classes.btn}>{file.lastModified?'Change selected file':'Upload Image'}</Button>
	        			<input type="file" name="myfile" accept="image/*" onChange={handleFileChange} className={classes.file} />
		          </div>
		          <TextField
		          	multiline = {true}
		            variant="outlined"
		            rows="2"
		            margin="normal"
		            fullWidth
		            id="title"
		            label="News"
		            name="username"
		            autoFocus
		            value={news}
		            onChange={e=>setNews(e.target.value)}
		          />
		          <Button
		            type="submit"
		            fullWidth
		            variant="contained"
		            color="primary"
		            className={classes.submit}
		          >
		      			Verify
							</Button>
  					</form>
					</div>
				</Grid>
		
			</Grid >
	<Loader loading={loading} />
		</CustomContainer>
	);
}

export default ImageChecker;