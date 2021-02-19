import React from 'react';
import PropTypes from 'prop-types';
import NodeFilter from './NodeFilter'
import PostList from './PostsList';

const Main = props => {
    return (
        <div id='body'>
            <NodeFilter />
            <PostList />
        </div>
    );
};

Main.propTypes = {

};

export default Main;