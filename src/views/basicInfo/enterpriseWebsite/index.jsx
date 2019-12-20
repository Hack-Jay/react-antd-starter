import React, { useState } from 'react'
import { Layout, Steps, Button, Card } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import InfoForm from './components/InfoForm'
import PhotoSetUp from './components/PhotoSetUp'
import ShowInfo from './components/ShowInfo'
import './index.less'
const { Step } = Steps

const EnterpriseWebsite = props => {
    const [basicInfo, setBasicInfo] = useState({ name: 'enterprise' })
    const [current, setCurrent] = useState(0)

    const handleSubmit = (e) => {
        setCurrent(1)
    }

    const save = () => {
    }

    return (
        <Layout className='animated fadeIn website-page'>
            <div>
                <CustomBreadcrumb arr={['企业基本信息', '企业官网']}></CustomBreadcrumb>
            </div>
            {!basicInfo.name ? <Card>
                    <Steps style={{ margin: '1rem', width: '40rem' }} current={current}>
                        <Step title='填写基本信息'></Step>
                        <Step title='企业照片'></Step>
                    </Steps>
                    {current === 0 && (
                        <InfoForm handleSubmit={handleSubmit} setCurrent={val => setCurrent(val)} />
                    )}
                    {current === 1 && <PhotoSetUp setCurrent={val => setCurrent(val)} />}
                    <footer className='btn-group'>
                        {
                            current === 0 && <Button type='primary' onClick={() => setCurrent(1)}>下一步</Button>
                        }
                        {
                            current === 1 && <> <Button onClick={() => setCurrent(0)}>上一步</Button>
                                <Button type='primary' onClick={() => setCurrent(1)}>保存</Button></>
                        }

                    </footer>
                </Card> : <ShowInfo />
            }


        </Layout>
    )
}
export default EnterpriseWebsite