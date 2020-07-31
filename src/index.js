import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cadastroVideo from './pages/cadastro/video'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/cadastro/video' component={cadastroVideo} />
      <Route component={() => (<div><h1>ERRO 404: Página não encontrada!</h1></div>)} />
    </Switch>
  </Router>,
  document.getElementById('root')
);