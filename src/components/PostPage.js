import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostDetail from './PostDetail'
import RepliesList from './RepliesList'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../reducers/postReducer';

const PostPage = props => {
    const postid = useParams().postid;
    console.log(Date.parse(new Date())/1000,postid)
    const dispatch = useDispatch();
    
    // useEffect(() => {
        dispatch(getPostById(postid))
    // },[dispatch])
    console.log(`postPage`,useSelector(s => s.post))

    return (
        <div id='body' style={{backgroundColor: '#f6f6f6'}}>
            <PostDetail postid={postid}/>
            <RepliesList postid={postid}/>
        </div>
    );
};

PostPage.propTypes = {
    
};

export default PostPage;