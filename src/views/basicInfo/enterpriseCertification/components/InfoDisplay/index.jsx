import React from 'react'
import { Divider, Row, Col } from 'antd'
import TagShow from '../../../../../components/TagShow'
import './index.less'

const InfoDisplayItem = props => {
    const { item } = props
    return (
        <div className='mt-30 display-item'>
            <span>{item.name}</span>
            <span>{item.files}</span>
        </div>
    )
}

const list = [
    { name: '企业全称：', files: 'fullName' },
    { name: '企业所在地：', files: 'address' },
    { name: '营业注册号：', files: 'registerNum' },
    { name: '营业执照有效日期：', files: 'validityDate' },
    { name: '企业联系人：', files: 'people' },
    { name: '联系电话：', files: 'phone' },
]

const InfoDisplay = props => {
    const { isError = 'eq', goBack } = props
    return (
        <div className='display-info-page'>
            <Row gutter={[16, 16]} className='item-row'>
                <Col xxl={{span: 2}} lg={{span: 3}} xs={{span: 6}}>企业类型:</Col>
                <Col xxl={{span: 20}} lg={{span: 18}} xs={{span: 12}}>
                    企业类型 
                    <TagShow status={1} title='认证失败' />
                </Col>
               
                <Col xxl={{span: 2}} lg={{span: 3}} xs={{span: 6}} className='text-right'>
                    <span className='link pointer' onClick={() => goBack(true)}> 重新认证 </span>
                </Col>
            </Row>
            {
                    isError ? <div className='error-msg mt-20'>
                        <p>认证失败原因：</p>
                        失败原因失败原因失败原因失败原因失败原因失败原因失败原因
                    </div> : null
            }
            <Row className='mt-35 flex-center' style={{ display: 'flex' }}>
                <Col xxl={{span: 2}} lg={{span: 3}} xs={{span: 6}}> 营业执照</Col>
                <Col xxl={{span: 22}} lg={{span: 21}} xs={{span: 18}}>
                    <img src="http://5b0988e595225.cdn.sohucs.com/images/20190129/a05e6d1a31734b54a3e139795ca06a4e.jpeg" alt="" />
                </Col>
            </Row>
            <Divider />
            {
                list.map(item => <InfoDisplayItem key={item.name} item={item} />)
            }
        </div>
    )
}

export default InfoDisplay