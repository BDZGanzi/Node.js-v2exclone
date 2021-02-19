import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RepliesList.css'
import { Avatar, Text, Card, Spacer } from '@zeit-ui/react';
import { useSelector } from 'react-redux';

const RepliesList = props => {
    console.log('postDetail',props.postid)
    const replies = useSelector( state => state.post.replies)
    console.log(Date.parse(new Date())/1000,useSelector(s => s.post))
    console.log(Date.parse(new Date())/1000,replies)

    return (
        <div id='container_repliesList' className='container_repliesList'>
            {/* <Text b>共 {replies.length} 条评论</Text> */}
            <Spacer y={0.3} />
            {
                replies.map(reply =>
                    <div id='reply_item' className='reply_item' key={reply.id}>
                        <Reply
                            username={reply.member.username}
                            content={reply.content}
                            avatar={reply.member.avatar_large}
                        />
                    </div>
                )
            }
        </div>
    );
};

const Reply = (props) => {
    return (
            <Card shadow hoverable style={{height: 'auto'}}>
                        <div id='container_reply' className='container_reply'>
                <div id='reply_leftDiv' className='reply_leftDiv'>
                    <Avatar size='medium' isSquare src={props.avatar}></Avatar>
                </div>
                <div id='reply_rightDiv' className='reply_rightDiv'>
                    <div id='reply_username' className='reply_username'>
                        {props.username}
                    </div>
                    <div id='reply_comment'>
                        {props.content}
                    </div>
                </div>
                </div>
            </Card>
    )
}

RepliesList.propTypes = {

};

export default RepliesList;