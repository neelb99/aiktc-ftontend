import React from 'react'
import CustomContainer from '../Container.js'
import {Grid,Paper,Typography,CardActionArea,Card,CardContent,Hidden,CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const About = ()=>{
	const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://image.cnbcfm.com/api/v1/image/104343217-Fake_news._GettyImages-645357576.jpg?v=1561442287&w=678&h=381)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

const mainFeaturedPost = {
  title: 'What is Fake News',
  description:
    "Fake News is created to deliberately misinform or deceive readers. Usually, these stories either influence people’s views, push a political agenda or cause confusion and and hatred.",
  image: 'https://www.sciencenews.org/wp-content/uploads/2018/07/080418_fakenews_feat.jpg',
  imgText: 'main image description'
};

const featuredPosts = [
  {
    title: 'Chatbot',
    description:
      'We have created a chatbot to which users can send links to articles or text messages and get feedback about the authenticity.',
    image: 'https://www.messengerpeople.com/wp-content/uploads/2019/11/chatbot-the-best-2.png',
    imageText: 'Image Text',
  },
  {
    title: 'Machine Learning',
    description:
      'Our model uses machine learning (using a Naive Bayes Classifier) and a number of other factors to decide if the news is fake.',
    image: 'https://images.idgesg.net/images/article/2018/01/emerging-tech_ai_machine-learning-100748222-large.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Whatsapp Integration',
    description:
      'A user can forward a whatsapp message to our designated number and he will instantly get feedback about it.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCcM63U8--oiDyydCmB_WDkALWpffQg2D7tdy5apzCz-rEmTiq',
    imageText: 'Image Text',
  },
  {
    title: 'Browser Extension',
    description:
      'We have created a browser extension to allow users to flag different news sites. This is used to establish a trust score.',
    image: 'https://cnet1.cbsistatic.com/img/mSWyXxMYcnm0J9OQB--mIujl5vk=/1092x0/2018/09/02/2bb2f48f-e695-4a2f-8618-0c7418a763d9/browser-icons-logos-chrome-big-black-4sts.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Image Verifier',
    description:
      'Our image verifier retrieves the exif data from the image and based on that decides if the image is edited or not.',
    image: 'https://i.pinimg.com/736x/d0/41/60/d04160bfa69793180214eb64c5135cb9.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Recent Fake News',
    description:
      'We have created a web scraper that scrapes altnews for the most recent, trending fake news stories, to inform users.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx29PFHMw9NDqgVMOiX9E-Y6nI10ihcSCK-QcjgVKWOZKRqogs',
    imageText: 'Image Text',
  },
];
	const classes = useStyles();
	return(	
		<CustomContainer>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
      {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          				<div className={classes.mainFeaturedPostContent}>
            				<Typography component="h1" variant="h3" color="inherit" gutterBottom>
              				{mainFeaturedPost.title}
            				</Typography>
            				<Typography variant="h5" color="inherit" paragraph>
              				{mainFeaturedPost.description}
            				</Typography>
          				</div>
        				</Grid>
      				</Grid>
					</Paper>
          <Grid container spacing={4}>
            {featuredPosts.map((post,key) => (
              <Grid item key={key} xs={12} md={6}>
					      <CardActionArea component="a" href="#">
					        <Card className={classes.card}>
					          <div className={classes.cardDetails}>
					            <CardContent>
					              <Typography component="h2" variant="h5">
					                {post.title}
					              </Typography>
					              <Typography variant="subtitle1" color="textSecondary">
					                {post.date}
					              </Typography>
					              <Typography variant="subtitle1" paragraph style={{marginTop:"5px"}}>
					                {post.description}
					              </Typography>
					            </CardContent>
					          </div>
					          <Hidden xsDown>
					            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
					          </Hidden>
					        </Card>
					      </CardActionArea>
					    </Grid>
            ))}
          </Grid>
      		 <Typography variant="body2" color="textSecondary" align="center" style={{marginTop:"20px"}}>
      			{'Copyright © Farzi.io 2020'}
    			</Typography>
 
		</CustomContainer>
	);
}

export default About