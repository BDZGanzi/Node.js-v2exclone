import React from 'react';
import PropTypes from 'prop-types';
import { Input, Avatar, User } from '@zeit-ui/react'
import { Search } from '@zeit-ui/react-icons'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = props => {
    const avatarLink = 'https://cdn.v2ex.com/avatar/fe77/a73b/312430_large.png?m=1577676007';
    return (
        <div id='header' className='container_header'>
            <div id='logoDiv' className='logoDiv'>
                <Link to='/'><Avatar src={logo} isSquare size='medium' /></Link>
                <div className='header_title'>
                    创意工作者们的社区
                </div>
            </div>


            <div id='searchDiv' className='searchDiv'>
                <Input
                    clearable
                    iconRight={<Search />}
                    placeholder='搜索'
                    name='search'
                />
            </div>


            <div id='userDiv' className='userDiv'>
                <User src={avatarLink} name={<Link to='/user'>北海</Link>}>嘿嘿嘿</User>
                    &nbsp;&nbsp;
                <Link to='/'>首页 &nbsp;</Link>
                <Link to='/'>设置 &nbsp;</Link>
            </div>
            {/* <Row>
                <Col span={8}>
                    <Row style={{ height: '100%' }}>
                        <Col span={5}>
                            <Row>
                                <Link to='/'><Avatar src={logo} isSquare size='medium' /></Link>
                            </Row>
                        </Col>
                        <Col span={22}>
                            <Row>
                                <Text size='18px'>创意工作者们的社区</Text>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row style={{ height: '100%' }} align='middle'>
                        <Input
                            clearable
                            iconRight={<Search />}
                            placeholder='搜索'
                            name='search'
                        />
                    </Row>
                </Col>

                <Col span={8}>
                    <Row style={{ height: '100%' }} align='middle'>
                        <User src={avatarLink} name={<Link to='/user'>北海</Link>}>嘿嘿嘿</User>
                    &nbsp;&nbsp;
                    <Link to='/'>首页 &nbsp;</Link>
                        <Link to='/'>设置 &nbsp;</Link>
                    </Row>
                </Col>
            </Row> */}
        </div>
    );
};

Header.propTypes = {

};

export default Header;