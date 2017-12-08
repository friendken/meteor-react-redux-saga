import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
  componentDidMount() {

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <div className="Row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h4 className="page-header">Login</h4>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <div className='form-group'>
                <span className='control-label'>Email Address</span>
                <input
                  className='form-control'
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </div>
              <div className='form-group'>
                <span className='control-label'>
                  <span className="pull-left">Password</span>
                  <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
                </span>
                <input
                  className='form-control'
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
