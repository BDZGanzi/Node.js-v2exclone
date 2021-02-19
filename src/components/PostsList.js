import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PostBrief from './PostBrief';
import '../styles/PostList.css'

const PostsList = props => {
    const posts = useSelector(state => state.postList)

    return (
        <div className='container_postList'>
            {
                posts.map(post =>
                    <div key={post.id} className='item'>
                        <PostBrief
                            postid={post.id}
                            title={post.title}
                            content={post.content}
                            avatar={post.member.avatar_large}
                            nodename={post.node.name}
                            username={post.member.username}
                            replies={post.replies}
                            url={post.url}
                        />
                    </div>
                )
            }
        </div>
    );
};

PostsList.propTypes = {

};

export default PostsList;