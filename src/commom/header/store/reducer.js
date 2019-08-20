import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	searchList: [],
	labelList: [],
	searchPage: 1,
	labelPage: 1,
	searchTotalPage: 1,
	labelTotalPage: 1,
	inputValue: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.GET_INPUT_VALUE:
			return state.set('inputValue', action.inputValue);
		case constants.CLEAR_INPUT:
			return state.set('inputValue', '');
		case constants.CHANGE_SEARCH_PAGE:
			return state.set('searchPage', action.page);
		case constants.CHANGE_LABEL_PAGE:
			return state.set('labelPage', action.labelPage);
		case constants.CHANGE_SEARCH_LIST:
			return state.merge({
				searchList: action.data,
				searchTotalPage: action.totalPage
			});
		case constants.CHANGE_Middle_LIST:
			return state.merge({
				labelList: action.data,
				labelTotalPage: action.totalPage
			});
		default:
			return state;
	}
}