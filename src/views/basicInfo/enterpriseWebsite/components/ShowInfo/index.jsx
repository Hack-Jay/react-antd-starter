import React, { useState } from 'react'
import { Card, Tabs, Button, Modal } from 'antd'
import { Link } from 'react-router-dom'
import TagShow from '@/components/TagShow'
import BasicInfo from '../BasicInfo'
import PhotoSetUp from '../PhotoSetUp'
import logo from '@/assets/images/logo.png'

import "./index.less";
const { TabPane } = Tabs

function callback(key) {
    console.log(key)
}

const ShowInfo = props => {
    const [visable, setVisable] = useState(false)
    const { imgUrlm, name, isExpiration = 1 } = props

    return (
        <div className='website-info-page'>
            <Card>
                <div className='flex flex-center'>
                    <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3962208255,3361020971&fm=26&gp=0.jpg' className='img-avatar' alt="img" />
                    <div className='info-container ml-30 flex-colum'>
                        <span>
                            万科企业股份有限公司
                            <TagShow status={0} title='认证失败' />
                            {
                                isExpiration && <><span className='expiration-text'> 服务即将到期！</span> <Link to='/basic-info/enterprise-website'>去续期</Link></>
                            }
                        </span>
                        <span className='text-gray'>行业：房地产</span>
                        <span className='text-gray'>人数：1000人以上</span>
                    </div>
                    <Button style={{ width: '107px' }} type='primary' size='large' onClick={() => setVisable(true)}>预览</Button>
                </div>
            </Card>
            <div className='mt-30'>
                <Card>
                    <Tabs size='large' defaultActiveKey='1' onChange={callback}>
                        <TabPane tab='基本信息' key='1'>
                            <div className='mt-20 ml-10'>
                                <p className='info-title'>企业基本信息</p>
                                <BasicInfo />
                            </div>
                        </TabPane>
                        <TabPane tab='企业照片' key='2'>
                            <div className='mt-20'>
                                <PhotoSetUp />
                            </div>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
            <Modal visible={visable} footer={null} onCancel={() => setVisable(false)}>
                <img alt='example' style={{ width: '100%' }} src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3962208255,3361020971&fm=26&gp=0.jpg' />
            </Modal>
        </div>
    )
}

export default ShowInfo