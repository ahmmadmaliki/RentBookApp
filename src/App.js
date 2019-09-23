import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Welcome from './Pages/Welcome';
import Details from './Pages/Details';
import explore from './Pages/explore';
import myModal from './Components/Modal';
import store from './Publics/Store';
import {Provider} from 'react-redux';
import donation from './Pages/donation';
import request from './Pages/request';


class App extends Component {
  render() {
    return (
      <Router >
        <Provider store={store}>
        <Switch>  
          <Route path='/modal' component={myModal} />
          <Route path='/details/:id' component={Details}/>      
         <Route path='/home' component={Homepage}/>
         <Route path='/explore' component={explore} />
         <Route path='/donation' component={donation} />
         <Route path='/request' component={request} />
         
         
         <Welcome/>
      </Switch>
      </Provider>
      </Router>
    );
  }
}

export default App;