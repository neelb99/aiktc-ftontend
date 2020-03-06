import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import RecentNews from './Components/RecentNews'
import About from './Components/About'
import ImageChecker from './Components/ImageChecker'

function App() {
  return (
    <BrowserRouter>
    	<Switch>
	    	<Route exact path ='/chatbot' component={Home}/>
	    	<Route exact path ='/recentfake' component={RecentNews}/>
	    	<Route exact path ='/' component={About}/>
	    	<Route exact path ='/imagechecker' component={ImageChecker}/>
	    </Switch>
    </BrowserRouter>
  );
}

export default App;
