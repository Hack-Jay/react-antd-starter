import React, { useState } from 'react'
import { Card, Button, Descriptions, message } from 'antd';
import Modal from '@/components/Modal'
import PassModalContent from '../PassModalContent'
import RefuseModalContent from '../RefuseModalContent'

import "./index.less";
const SubmitDetail = props => {
    const [passModalVisable, setPassModalVisable] = useState(false)
    const [refuseModalVisable, setRefuseModalVisable] = useState(false)

    const { name, isPassed = false, setDetailShow } = props

    const handleOk = () => {
        console.log('info')
        // 回到表格
        setDetailShow(false)
    }

    const handleRefuse = (text) => {
        console.log('handle refuse', text)
        if(!text) {
            message.error(' 必须填写理由');
            return
        }
        setDetailShow(false)
    }

    return (
        <div className='submit-application-detail mt-20'>
            <Card title='基本信息' className='desc-card'>
                <Descriptions size='large'>
                    <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
                    <Descriptions.Item label="职位">产品</Descriptions.Item>
                    <Descriptions.Item label="联系电话">13333333333</Descriptions.Item>
                    <Descriptions.Item label="身份证号">442187711111111111</Descriptions.Item>
                    <Descriptions.Item label="邮箱">908733333@qq.com</Descriptions.Item>
                    <Descriptions.Item label="实名认证">已认证</Descriptions.Item>
                    <Descriptions.Item label="提交时间">2019年12月14日15:31:59</Descriptions.Item>
                </Descriptions>
            </Card>
            <div className='mt-30'>
                <Card title='验证信息' className={`info-card ${!isPassed && 'add-info'}`}>
                    身份证：
                    <img className='img-identity' src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190816/4df668e7093a420eb4041e157f72e7b1.jpeg" alt="" />
                    {
                        !isPassed && <footer className='footer-btn'>
                            <Button onClick={() => setRefuseModalVisable(true)}>拒绝</Button>
                            <Button type='primary' className='ml-40' onClick={() => setPassModalVisable(true)}>通过</Button>
                        </footer>
                    }
                </Card>
            </div>
            {
                isPassed && <div className='mt-30 '>
                    <Card title='操作记录' className='record-card'>
                        <Descriptions size='large'>
                            <Descriptions.Item label="操作人">付小小</Descriptions.Item>
                            <Descriptions.Item label="操作结果">通过并声称名片</Descriptions.Item>
                            <Descriptions.Item label="操作时间">2019-12-14 15:58:01</Descriptions.Item>
                        </Descriptions>
                    </Card>
                </div>
            }

            <Modal
                component={(<PassModalContent handleOk={handleOk}/>)}
                title="生成员工名片确认"
                visible={passModalVisable}
                footer={null}
                handleOk={() => console.log('handle ok')}
                handleCancel={() => setPassModalVisable(false)}
            />

            <Modal
                component={(<RefuseModalContent handleOk={handleRefuse}/>)}
                title="拒绝"
                visible={refuseModalVisable}
                footer={null}
                handleOk={() => console.log('handle refuse ok')}
                handleCancel={() => setRefuseModalVisable(false)}
            />
        </div>
    )
}

export default SubmitDetail