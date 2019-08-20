import LogoPic from '../../statics/baidu.png'
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 600px;
	width: 1349px;
`;

export const TodayWeather = styled.div`
	position:absolute;
	top: 0;
	right: 20px;
	width: 120px;
	height: 100px;
	color: #043567;
`;

export const TodayLeft = styled.div`
	.pic {
		position: absolute;
		top: 0;
		left: 10px;
		height: 50px;
		width: 50px;
	}	
`;

export const TodayRight = styled.div`
	color: #384c78;
	font-size: 14px;
	.shishi_wendu {
		position:absolute;
		top: 0;
		right: 20px;
		font-size: 24px;
	}
	.shishi_danwei {
		font-size: 18px;
		position:absolute;
		top: 0;
		right: 0;
		}
	.weather {
		position: absolute;
		top: 32px;
		right: 0;
	}
`;

export const BaiduLogo = styled.a`
	height: 129px;
	width: 270px;
	display: block;
	background: url(${LogoPic});
	background-size: contain;
	margin: 25px auto 10px;
`;
export const SearchWrapper = styled.form`
	margin: 0 auto;
	width: 643px;
	height: 36px;
`;

export const SearchInput = styled.input`
	width: 540px;
	height: 40px;
	border: 1px solid #b6b6b6;
	display: block;
	float: left;
	font-size: 16px;
	padding: 0 10px 0 10px;
	box-sizing: border-box;

`;

export const SearchButton = styled.button`
	float: right;
    width: 100px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    background: #3385ff;
    border: 1px solid #2d78f4;
`;

export const SearchInfo = styled.div`
	margin: 20px 0 0 335px;
	width: 640px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	position: absolute;
	background: #fff;
	z-index:999;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
export const ListWrapper = styled.div`
	position: absolute;
	margin: 20px 0 0 270px;
	width: 800px;
	height: 280px;
	.left {
		position:absolute;
		top: 120px;
		left: 0;
		font-size: 40px;
		color: #999;
		cursor: pointer;
	}
	.right {
		position:absolute;
		top: 120px;
		right: 5px;
		font-size:40px;
		color: #999;
    	cursor: pointer;
	}
`;

export const ItemWrapper = styled.div`
	position: absolute;
	margin: 0 0 0 50px;
	width: 700px;
	height: 280px;
`;

export const ListItem = styled.a`
	float: left;
	width: 120px;
	margin: 10px 10px 10px 10px;
	height: 120px;
	font-size:16px;
	text-decoration:none;
	color: #000;
	.list-pic {
		display: block;
		width: 80px;
		height: 80px;
		margin: 0px 20px 10px 20px;
		border-radius: 60%;
		border: 1px solid #dcdcdc;
	}
	text-align: center;
`
export const TopicWrapper = styled.div`
	position: absolute;
	top: 490px;
	left: 340px; 
	width: 700px;
	margin: 0 auto;
	overflow: hidden;
	padding: 5px 0 10px 0;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 12px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;