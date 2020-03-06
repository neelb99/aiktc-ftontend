import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import RecentNews from './Components/RecentNews'
import About from './Components/About'

function App() {
  return (
    <BrowserRouter>
    	<Switch>
	    	<Route exact path ='/' component={Home}/>
	    	<Route exact path ='/recentfake' component={RecentNews}/>
	    	<Route exact path ='/about' component={About}/>
	    </Switch>
    </BrowserRouter>
  );
}

export default App;
