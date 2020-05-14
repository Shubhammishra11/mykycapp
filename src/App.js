import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Display from './components/Display';
import Selfie from './components/Selfie';
import Id from './components/Id';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component{
	render(){
		return(
			<Router>
			    <Route exact path = "/" component = {Login} />
			    <Route path = "/home/" component = {Home} />
			    <Route path = "/display/" component = {Display} />
			    <Route path = "/selfie/" component = {Selfie} />
			    <Route path = "/id/" component = {Id} />
			</Router>
      
		)	
	}
}

export default App;

