import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon, Layout, Avatar, Badge } from 'antd'

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, avatar, menuToggle, loginOut } = props
    const menu = (
        <Menu>
            <Menu.ItemGroup title='用户设置'>
                <Menu.Divider />
                <Menu.Item>
                    <Icon type='edit' />
                    个人设置
                </Menu.Item>
                <Menu.Item>
                    <Icon type='setting' theme='filled' />
                    系统设置
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.Divider />
            <Menu.Item>
                <span onClick={loginOut}>
                    <Icon type='logout' /> 退出登录
                </span>
            </Menu.Item>
        </Menu>
    )
    return (
        <Header className='header'>
            <div className='left'>
                <Icon
                    style={{ fontSize: '2rem', color: '#ffffff' }}
                    onClick={menuClick}
                    type={menuToggle ? 'menu-unfold' : 'menu-fold'}
                />
            </div>
            <div className='right'>
                <div>
                    <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
                        <div className='ant-dropdown-link'>
                            <Avatar icon='user' src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                            <span className='user-name'>momo.zxy</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}

AppHeader.propTypes = {
    menuClick: PropTypes.func,
    avatar: PropTypes.string,
    menuToggle: PropTypes.bool,
    loginOut: PropTypes.func
}

export default AppHeader
