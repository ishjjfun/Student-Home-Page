import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LostandfoundWrapper } from './style.js';

class Lostandfound extends PureComponent {
  render() {
    return (
      <LostandfoundWrapper>
      	Lostandfound
      </LostandfoundWrapper>
    )
  }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Lostandfound);