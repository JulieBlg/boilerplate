import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/content', component: ContentPage, exact: false },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map(({ path, component, exact }) => {
          console.log('ici', path);
          return (
            <Route key={path} path={path} exact={exact}>
              {component}
            </Route>
          );
        })}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
