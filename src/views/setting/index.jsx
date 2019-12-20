import React from 'react'
import { Layout, Card, Button } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import SettingForm from './components/SettingForm'
import SettingList from './components/SettingList'

import './index.less'
const Setting = (props) => {

    const onSearch = () => {
        
    }

    const onCreate = () => {

    }
    
    return (
        <Layout className='animated fadeIn setting-page'>
            <div>
                <CustomBreadcrumb arr={['账号设置']}></CustomBreadcrumb>
            </div>
            <Card>
                <SettingForm onSubmit={onSearch}/>
                <p>
                    创建管理后台账号，并赋予该账号不同角色权限
                    <Button type='primary' onClick={onCreate}>创建</Button>
                </p>
                <SettingList />
            </Card>
        </Layout>
    )
}

export default Setting