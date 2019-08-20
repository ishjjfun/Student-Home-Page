// 将reducer拆分成各个组件的reducer
// 使用combine方法将reducer整合起来
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../commom/header/store';

const reducer = combineReducers({
	header: headerReducer,
})
export default reducer;