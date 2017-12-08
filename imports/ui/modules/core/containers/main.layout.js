import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import { Requests } from '../../../../../lib/collections/index';
import MainLayout from '../components/main.layout';

const MainLayoutContainer = withTracker(() => {
  return {
    loggingIn: Meteor.loggingIn(),
    authenticated: !Meteor.loggingIn() && !!Meteor.userId()
  }
})(MainLayout);

export default MainLayoutContainer;
