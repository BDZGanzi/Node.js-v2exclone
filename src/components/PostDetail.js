import React from 'react';
import PropTypes from 'prop-types';
import { Text, Tag, Avatar, Spacer, Breadcrumbs, Row, Button } from '@zeit-ui/react';
import '../styles/PostDetail.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostDetail = props => {
    console.log('postDetail',props.postid)
    const postDetail = useSelector(s => s.post.postDetail)
    console.log(Date.parse(new Date())/1000,postDetail)
    const replyNum = 0 /*useSelector(s => s.post.replies.length)*/
    return (
        <div id='container' className='container_postDetail'>
            <div id='section_title' className='section_title'>
                <div id='leftDiv_postDetail' className='leftDiv_postDetail'>
                    <div id='nav'>
                        <Breadcrumbs separator='>'>
                            <Breadcrumbs.Item><Link to='/' style={{ color: '#888888' }}>V2EX</Link></Breadcrumbs.Item>
                            <Breadcrumbs.Item><Link to='/node/:name' style={{ color: '#444444' }}>{postDetail.node.title}</Link></Breadcrumbs.Item>
                        </Breadcrumbs>
                    </div>
                    <div className='title'>
                        <Text size='18px' p>{postDetail.title}</Text>
                    </div>
                    <div id='postinfo'>
                        <Row>
                            <Tag type='lite'>{postDetail.member.username}</Tag>
                            <Spacer x={0.3} />
                            <Tag type='lite'>{replyNum} 条评论</Tag>
                            <Spacer x={0.3} />
                            <Tag type='lite'>发帖时间</Tag>
                        </Row>
                    </div>
                </div>
                <div id='rightDiv_postDetail' className='rightDiv_postDetail'>
                    <Avatar src={postDetail.member.avatar_normal} size='medium' isSquare></Avatar>
                </div>
            </div>
            <div id='section_content' className='section_content'>
                <Text>{postDetail.content}</Text>
            </div>
            <div id='section_actions' className='section_actions'>
                <Button size='mini' shadow auto>Upvode</Button>&nbsp;
                <Button size='mini' shadow auto>Downvote</Button>&nbsp;
                <Button size='mini' shadow auto>感谢</Button>&nbsp;
                <Button size='mini' shadow auto>收藏</Button>&nbsp;
                <Button size='mini' shadow auto>忽略</Button>&nbsp;
            </div>
        </div>
    );
};

PostDetail.propTypes = {

};

export default PostDetail;