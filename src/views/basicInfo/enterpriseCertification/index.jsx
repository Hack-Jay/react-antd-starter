import React, { useState, useEffect, useRef } from 'react'
import { Layout, Card } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import CertificationForm from './components/CertificationForm'
import InfoDisplay from './components/InfoDisplay'

const EnterpriseCertification = props => {
    const [status, setStauts] = useState(false)
    const [info, setInfo] = useState('')

    const form = useRef(null)
    const handleFormSubmit = e => {
        e.preventDefault();
        form.current.validateFields((err, values) => {
            if (!err) {
                console.log('企业基本信息form: ', values);
                setStauts(false)
            }
        });
    };

    return (
        <Layout className='animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['企业基本信息', '企业认证']}></CustomBreadcrumb>
            </div>
            <Card style={{height: '100vh'}}>
                {
                    status ? <CertificationForm onSubmit={handleFormSubmit} ref={form}/> : <InfoDisplay goBack={setStauts}/>
                }
            </Card>
            
        </Layout>
    )
}
export default EnterpriseCertification