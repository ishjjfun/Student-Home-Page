import React, { Component } from 'react';
import { HeaderWrapper } from './style.js';
import Top from './component/Top.js';
import MiddleTop from './component/MiddleTop.js';
import Foot from './component/Foot.js';
import MiddleBottom from './component/MiddleBottom.js'
import { actionCreators } from './store'
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return(
				<div>
				<HeaderWrapper>
					<Top />
					<MiddleTop />
					<MiddleBottom />
					<Foot />
				</HeaderWrapper>
				</div>
			)
		}

	componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getMiddleInfo());
	}
});

export default connect(null, mapDispatch)(Header);
