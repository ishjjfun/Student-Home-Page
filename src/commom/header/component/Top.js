import React, { Component } from 'react';
import { TodayWeather, TodayLeft, TodayRight } from '../style.js'

class Top extends Component {
	render() {
		return(
				<div>
					<TodayWeather>
						<TodayLeft>
							<img 
								className='pic'
								alt=''
								src='//mat1.gtimg.com/pingjs/ext2020/weather/pc/icon/weather/day/10.png'
							/>
						</TodayLeft>
						<TodayRight>
							<p className='shishi_wendu'>24</p>
							<p className='shishi_danwei'>℃</p>
							<p className='weather'>暴雨</p>
						</TodayRight>
					</TodayWeather>
				</div>
			)
	}
}

export default Top;
