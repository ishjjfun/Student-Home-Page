import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BookWrapper } from './style.js'

class Bookexchange extends PureComponent {
  render() {
    return (
      <BookWrapper>Bookexchange</BookWrapper>
    )
  }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Bookexchange);