import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeSearchList = (data) => ({
	type: constants.CHANGE_SEARCH_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

const changeMiddleList = (data) => ({
	type: constants.CHANGE_Middle_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const getInput = (value) => ({
	type: constants.GET_INPUT_VALUE,
	inputValue: value
});

export const clearInputValue = () => ({
	type: constants.CLEAR_INPUT
});

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changeLabelPage = (page) => ({
	type: constants.CHANGE_LABEL_PAGE,
	labelPage: page
});

export const changeSearchPage = (page) => ({
	type: constants.CHANGE_SEARCH_PAGE,
	page
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeSearchList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};

export const getMiddleInfo = () => {
	return (dispatch) => {
		axios.get('/api/middleList.json').then((res) => {
			const data = res.data;
			dispatch(changeMiddleList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};

