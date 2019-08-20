import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HelpWrapper } from './style.js'

class Help extends PureComponent {
  render() {
    return (
      <HelpWrapper>Help</HelpWrapper>
    )
  }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Help);