import React,{useState,useEffect} from 'react'
import CustomContainer from '../Container.js'
import Loader from './Loader'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Typography,Button} from '@material-ui/core' 
import {Card,CardActionArea,CardActions,CardContent,CardMedia} from '@material-ui/core';

const RecentNews = ()=>{
	const useStyles = makeStyles({
	  media: {
	    height: 150,
	  },
	});
	const classes = useStyles();
	const [news,setNews] = useState([])
	const [loading,setLoading] = useState(true)
	useEffect(()=>{
		(async ()=>{
			const data = await fetch('https://recentnewsdata.herokuapp.com/api/recentnews');
			const finaldata = await data.json()
			setNews(finaldata)
			setLoading(false)
		})()
	},[])

	const getNews = ()=>{
		return news.map((item,key)=>{
			return(
				<Grid key={key} item xs={12} sm={6} md={4}>
					<Card style={{height:"360px", borderRadius:"5px",padding:"5px"}} onClick={()=>{window.location=item.link}}>
			      <CardActionArea>
			        <CardMedia
			          className={classes.media}
			          image={item.image}
			          title={item.title}
			        />
			        <CardContent>
			          <Typography gutterBottom variant="h6" component="h6">
			            {item.title}
			          </Typography>
			        </CardContent>
			      </CardActionArea>
			      <CardActions>
			        <Button size="small" color="primary" onClick={()=>{window.location=item.link}}>
			          Learn More
			        </Button>
			      </CardActions>
			    </Card>
			   </Grid>
			);
		})
	}

	return(	
		<CustomContainer>
			<Grid container spacing={3}>
				{getNews()}
				<Loader loading={loading} />
			</Grid>
		</CustomContainer>
	);
}

export default RecentNews