import React, { Component } from 'react';
import {TopicWrapper, TopicItem} from '../style.js';
import LostandFound from '../../../statics/LostandFound.png'
import jianzhi from '../../../statics/jianzhi.png'
import huzhu from '../../../statics/huzhu.png'
import shuji from '../../../statics/shuji.png'
import tongxunlv from '../../../statics/tongxunlv.png'
import more from '../../../statics/more.png'
import { Link } from 'react-router-dom';

class Foot extends Component {
	handleScrollTop() {
		window.scrollTo({ 
    	top: 500, 
    	behavior: "smooth" 
		});
	}

	render() {
		return(
				<div>
				<TopicWrapper>
					<Link to={'/lostandfound'}>
					<TopicItem onClick={this.handleScrollTop}>
					<img 
						className='topic-pic' 
						alt=''
						src={LostandFound} />
					失物招领
					</TopicItem>
					</Link>
					<Link to={'/job'}>
					<TopicItem onClick={this.handleScrollTop}>
					<img 
						className='topic-pic' 
						alt=''
						src={jianzhi}/>
					兼职发布
					</TopicItem>
					</Link>
					<Link to={'/help'}>					
					<TopicItem onClick={this.handleScrollTop}>
					<img 
						className='topic-pic'
						src={huzhu}
						alt=''
					/>
					校内互助
					</TopicItem>
					</Link>
					<Link to={'/bookexchange'}>
					<TopicItem onClick={this.handleScrollTop}>
					<img 
						className='topic-pic'
						src={shuji}
						alt=''
					/>
					书籍互送
					</TopicItem>
					</Link>
					<Link to={'/call'}>
					<TopicItem onClick={this.handleScrollTop}>
					<img 
						className='topic-pic'
						src={tongxunlv}
						alt=''
					/>
					通讯录
					</TopicItem >
					</Link>
					<TopicItem>
					<img 
						className='topic-pic'
						src={more}
						alt=''
					/>
					更多功能
					</TopicItem>
				</TopicWrapper>
				</div>
			)
	}
}

export default Foot;
