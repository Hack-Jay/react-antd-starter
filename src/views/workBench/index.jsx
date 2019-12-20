import React, { useState, useEffect } from 'react'
import { Layout, Card, Tabs } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import SubmitTable from './components/SubmitTable'
import SystemIssuesTable from './components/SystemIssuesTable'
import SubmitDetail from './components/SubmitDetail'

const { TabPane } = Tabs

import "./index.less";
const WorkBench = props => {
    const [submitList, setSubmitList] = useState([])
    const [issuesList, setIssuesList] = useState([])
    const [detailShow, setDetailShow] = useState(false)

    useEffect(() => {
        getSubmitList()
        getIssuesList()
    }, [])

    const getSubmitList = () => {
        setTimeout(() => {
            setSubmitList([{
                key: '1',
                name: 'John Brown',
                type: 0,
                age: 32,
                job: '产品',
                result: '已通过',
                time: '2019-05-18 08:22:10',
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                type: 0,
                result: '已通过',
                job: '产品',
                time: '2019-05-18 08:22:10',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                type: 0,
                result: '已通过',
                time: '2019-05-18 08:22:10',
                job: '研发',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },])
        }, 2000)
    }

    const getIssuesList = () => {
        setTimeout(() => {
            setIssuesList([
                {
                    key: '1',
                    name: 'John Brown',
                    msg: '企业已被平台禁用，请联系有传运营人员了解详细',
                    age: 32,
                    job: '产品',
                    result: '已通过',
                    time: '2019-05-18 08:22:10',
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    msg: '企业已被平台禁用，请联系有传运营人员了解详细',
                    type: 0,
                    result: '已通过',
                    job: '产品',
                    time: '2019-05-18 08:22:10',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    type: 0,
                    msg: '企业已被平台禁用，请联系有传运营人员了解详细',
                    result: '已通过',
                    time: '2019-05-18 08:22:10',
                    job: '研发',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ])
        }, 2000)
    }

    return (
        <Layout className='animated fadeIn workbench-page mt-20'>
            <div>
                <CustomBreadcrumb arr={['工作台']}></CustomBreadcrumb>
            </div>
            {
                !detailShow && <Card>
                <Tabs size='large' defaultActiveKey='1'>
                    <TabPane tab='提交申请' key='1'>
                        <div className='ml-10'>
                            <SubmitTable list={submitList} setDetailShow={setDetailShow} />
                        </div>
                    </TabPane>
                    <TabPane tab='系统事项' key='2'>
                        <div className=''>
                            <SystemIssuesTable list={issuesList} />
                        </div>
                    </TabPane>
                </Tabs>
            </Card>
            }
            {
                detailShow &&  <SubmitDetail visable={detailShow} setDetailShow={setDetailShow} />
            }
        </Layout>
    )
}

export default WorkBench