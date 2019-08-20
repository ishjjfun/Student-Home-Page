import React, { Component } from 'react';
import { BaiduLogo, SearchWrapper, SearchInput, SearchButton,SearchInfo,
	 SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem,} from '../style.js'
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { GlobalStyle } from '../component/../../../statics/iconfont/iconfont.js';

class MiddleTop extends Component {

	getListArea() {
		const { focused, list, page, totalPage, mouseIn, 
			handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>
						{newList[i]}
					</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						推荐
						<SearchInfoSwitch 
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
							换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}

	render() {
		const { list, inputValue,
				handleInputFocus, handleInputBlur, handleChangeInput,
				clearInput, handleClickClear
				} = this.props;
		return(
				<div>
				<BaiduLogo href='/'/>
				<SearchWrapper action='https://www.baidu.com/s'  target='_blank'>
					<GlobalStyle />
					<SearchInput 
					type='text' name='wd'
					autoComplete='off'
					value={inputValue}
					onChange={handleChangeInput}
					onFocus={() => handleInputFocus(list)}
					onBlur={handleInputBlur}
					onKeyDown={clearInput}
					/>
					<SearchButton type="submit"
					onClick={handleClickClear}
					>百度一下</SearchButton>
				</SearchWrapper>
				{this.getListArea()}
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'searchList']),
		page: state.getIn(['header', 'searchPage']),
		totalPage: state.getIn(['header', 'searchTotalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		inputValue: state.getIn(['header', 'inputValue'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangeInput(text) {
			const value = text.target.value
			dispatch(actionCreators.getInput(value));
		},
		// clearInput(e) {
  //       	if(e.keyCode === 13) {
		// 		dispatch(actionCreators.clearInputValue());
		// 	}
		// },
		// handleClickClear() {
		// 		dispatch(actionCreators.clearInputValue());
		// },
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changeSearchPage(page + 1));
			}else {
				dispatch(actionCreators.changeSearchPage(1));
			}
		},
	}
}

export default connect(mapStateToProps, mapDispathToProps)(MiddleTop);
