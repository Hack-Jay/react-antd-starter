import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import CustomMenu from '@/components/CustomMenu'
import logo from '@/assets/images/logo.png'

const { Sider } = Layout

const AppAside = props => {
    let { menuToggle, menu } = props
    return (
        <Sider className='aside' collapsed={menuToggle} width={220} style={{ background: '#fff' }}>
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <CustomMenu menu={menu}></CustomMenu>
        </Sider>
    )
}

AppAside.propTypes = {
    menuToggle: PropTypes.bool,
    menu: PropTypes.array.isRequired
}

export default AppAside
