import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { JobWrapper } from './style.js'

class Job extends PureComponent {
  render() {
    return (
      <JobWrapper>Job</JobWrapper>
    )
  }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Job);