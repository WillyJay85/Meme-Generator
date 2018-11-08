import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import MemeGenerator from './MemeGenerator'
import './MemeGenerator.css'
import AboutPage from './AboutPage'

class App extends Component {

  renderMemeGenerator = () =>{
    return (<MemeGenerator/>)

  }
  renderAboutPage = () =>{
    return (<AboutPage/>)
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MemeGenerator} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  )
}
}


export default App;
