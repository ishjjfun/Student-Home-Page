import React, { Component } from 'react';
import Header from './commom/header/index.js'
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Bookexchange from './pages/bookexchange'
import Call from './pages/call'
import Detail from './pages/detail'
import Help from './pages/help'
import Job from './pages/job'
import Lostandfound from './pages/lostandfound'
import Write from './pages/write'


class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <GlobalStyle />
      <BrowserRouter>
      	<div>
        	<Header />
      		<Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/bookexchange' exact component={Bookexchange}></Route>
            <Route path='/call' exact component={Call}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            <Route path='/help' exact component={Help}></Route>
            <Route path='/job' exact component={Job}></Route>
            <Route path='/lostandfound' exact component={Lostandfound}></Route>
            <Route path='/write' exact component={Write}></Route>
      	</div>
      	</BrowserRouter>
    </Provider>
    );
  }
}

export default App;
