import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import configureStore from '../../../ui/store/configureStore';
import { MainLayoutContainer, NotFound } from '../../../ui/modules/core';
import { Dashboard } from '../../../ui/modules/dashboard';
import { Signin } from '../../../ui/modules/users';
import Public from './public';

const store = configureStore();

const Routes = appProps => (
  <Provider store={store}>
    <MainLayoutContainer {...appProps} >
      <Router>
          <Switch>
            <Route exact name="index" path="/" component={Dashboard} />
            <Public path="/signin" component={Signin} {...appProps} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </MainLayoutContainer>
  </Provider>
);

export default Routes;
