import React from 'react';

const NotFound = () => (
  <div className="alert alert-danger">
    <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
  </div>
);

export default NotFound;
