import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CallWrapper } from './style.js'

class Call extends PureComponent {
  render() {
    return (
      <CallWrapper>Call</CallWrapper>
    )
  }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Call);