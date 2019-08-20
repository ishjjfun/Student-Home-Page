import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginWrapper } from './style.js'

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>Login</LoginWrapper>
    )
  }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Login);