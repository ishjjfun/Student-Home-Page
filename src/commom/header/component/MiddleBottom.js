import React, { Component } from 'react';
import { ListWrapper, ItemWrapper, ListItem } from '../style.js'
import { actionCreators } from '../store';
import { connect } from 'react-redux';

class MiddleBottom extends Component {
	getListArea() {
		const {  list, page } = this.props;
		const newList = list.toJS();
		const pageList = [];
		
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				if (newList[i]) {
					pageList.push(
					<ListItem key={newList[i].id}>
							<img
								className='list-pic'
								src={newList[i].imgUrl}
								alt=''
							/>
							{newList[i].title}
					</ListItem>
					)
				}	
			}return (<ItemWrapper>{pageList}</ItemWrapper>)
		}else {
			return null;
		}
	}


	render() {
		const {page, totalPage, 
			handleLeftChange, handleRightChange} = this.props;
		return(
				<div>
				<ListWrapper>
					<span 
					onClick={() => handleLeftChange(page, totalPage)}			
					className="iconfont left">&#xe64f;
					</span>
					<span 
					onClick={() => handleRightChange(page, totalPage)} 
					className="iconfont right">&#xe650;
					</span>
				{this.getListArea()}
				</ListWrapper>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.getIn(['header', 'labelList']),
		page: state.getIn(['header', 'labelPage']),
		totalPage: state.getIn(['header', 'labelTotalPage']),
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleRightChange(page, totalPage) {
			if (page < totalPage) {
				dispatch(actionCreators.changeLabelPage(page + 1));
			}else {
				dispatch(actionCreators.changeLabelPage(1));
			}
		},
		handleLeftChange(page, totalPage) {
			if (page > 1) {
				dispatch(actionCreators.changeLabelPage(page - 1));
			}else {
				dispatch(actionCreators.changeLabelPage(totalPage));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(MiddleBottom);
