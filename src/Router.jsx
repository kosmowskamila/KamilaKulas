import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from "./routes";
import {AboutMe, Error, Experience, Photography, Projects} from "./views";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.ABOUT_ME} component={AboutMe}/>
      <Route exact path={routes.EXPERIENCE} component={Experience}/>
      <Route exact path={routes.PHOTOGRAPHY} component={Photography}/>
      <Route exact path={routes.PROJECTS} component={Projects}/>
      <Route path='*' component={Error}/>
    </Switch>
  </BrowserRouter>
);

export default Router;