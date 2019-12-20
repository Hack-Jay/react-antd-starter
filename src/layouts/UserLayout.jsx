import React from 'react'
import logo from '@/assets/images/login/bg-yc.png'

import "./UserLayout.less"

const UserLayout = props => {
    const { children, title, text, toRedirect } = props

    return (
        <div className='container'>
            <div className='user-content'>
                <div className='content-left'>
                    <img src={logo} alt="有传" />
                    <span>有传企业管理后台</span>
                </div>
                <div className='content-right'>
                    <div className='content-right-header'>
                        <span className='header-info'>{title}</span>
                        <span className='header-right pointer' onClick={toRedirect}>{text}</span>
                    </div>
                    {children}
                </div>
            </div>
            <footer className='login-footer'>
                copyright©️2019 深圳市有传科技有限公司
        </footer>
        </div>
    )
}

export default UserLayout