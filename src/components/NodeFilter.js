import React from 'react';
import PropTypes from 'prop-types';
import { getRecent, getHot } from '../reducers/postListReducer'
import { Spacer } from '@zeit-ui/react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/NodeFilter.css'

const NodeFilter = props => {
    const dispatch = useDispatch()
    return (
        <div id='nodeFilter' className='container_nodeFilter'>
            <Link to='/node/hot' style={{color: 'black'}} onClick={() => dispatch(getHot())}>&nbsp; 最热 &nbsp;</Link>
            <Link to='/node/recent' style={{color: 'black'}} onClick={() => dispatch(getRecent())}>&nbsp; 全部 &nbsp;</Link>
            <Link to='/node/nodes' style={{color: 'black'}} onClick={() => dispatch(getRecent())}>&nbsp; 节点 &nbsp;</Link>
            <Link to='/node/members' style={{color: 'black'}} onClick={() => dispatch(getRecent())}>&nbsp; 关注 &nbsp;</Link>
            <Link to='/node/frontend' style={{color: 'black'}} onClick={() => dispatch(getRecent())}>&nbsp; 前端 &nbsp;</Link>          
            <Link to='/node/javascript' style={{color: 'black'}} onClick={() => dispatch(getRecent())}>&nbsp; JavaScript &nbsp;</Link>
            <Link to='/node/react' style={{color: 'black'}} onClick={() => dispatch(getRecent())}>&nbsp; React &nbsp;</Link>
            <Spacer y={0.5} />
        </div>
    );
};

NodeFilter.propTypes = {

};

export default NodeFilter;