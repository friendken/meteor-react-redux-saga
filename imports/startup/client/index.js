// Import client startup through a single index entry point
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/routes';

Meteor.startup(() => {
  ReactDOM.render(<Routes />, document.getElementById('reactRoot'));
});
