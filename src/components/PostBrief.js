import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Tag, Row, Spacer,Link as UILink} from '@zeit-ui/react';
import { Link } from 'react-router-dom';
import '../styles/PostBrief.css'

const PostBrief = props => {
    return (
        <div id='container_postBrief' className='container_postBrief'>
            <Card shadow hoverable>
                <div className='leftDiv_postBrief'>
                    <Avatar src={props.avatar} isSquare size='medium'></Avatar>
                </div>
                <div className='rightDiv_postBrief'>
                    <Link to={`post/${props.postid}`} style={{color: 'black'}}>{props.title}</Link>
                    <Spacer y={0.3} />
                    <Row>
                        <Tag type='lite'>在 {props.nodename}</Tag>
                        <Spacer x={0.3} />
                        <Tag type='lite'>by {props.username}</Tag>
                        <Spacer x={0.3} />
                        <Tag type='lite'>评论：{props.replies}</Tag>
                        <Spacer x={0.3} />
                        <Tag type='lite'><UILink type='secondary' href={props.url}>查看</UILink></Tag>
                    </Row>
                </div>
            </Card>
        </div>
    );
};

PostBrief.propTypes = {

};

export default PostBrief;