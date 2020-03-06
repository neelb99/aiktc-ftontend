import React,{useState} from 'react'
import {Grid, Hidden} from '@material-ui/core';
import CustomContainer from '../Container.js'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Avatar,Typography,Button} from '@material-ui/core'
import Loader from './Loader'

const ImageChecker = ()=>{

	const [news,setNews] = useState('')
	const [file,setFile] = useState([])
	const [loading,setLoading] = useState(false)
	const useStyles = makeStyles(theme => ({
    paper: {
      margin: theme.spacing(8, 4),
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
      padding:' 4px 125px',
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
	const handleFileChange = e=>setFile(e.target.files[0]);
	const handleSubmit = e=>{
		e.preventDefault()
		const form = new FormData();
		setLoading(true)
		if(news==='' && file.length===0)
			alert('Upload an Image!')
		else if(news==='')
			form.append('image',file)
		else if(file.length===0)
			console.log("only text")
		else
			form.append('image',file)
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