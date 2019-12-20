import React from 'react'
import { Descriptions, Button } from 'antd'

import './index.less'
const PassModalContent = props => {
    const { handleOk } = props
    return (
        <div className='pass-content'>
            <Descriptions column={1} className='pass-content-card'>
                <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="公司">有传科技公司</Descriptions.Item>
                <Descriptions.Item label="职位">运营经理</Descriptions.Item>
                <Descriptions.Item label="电话">13333333332</Descriptions.Item>
            </Descriptions>
            <div className='pass-content-btn mt-20'>
                <Button type='primary' onClick={handleOk}>确定</Button>
            </div>
        </div>
    )
}

export default PassModalContent