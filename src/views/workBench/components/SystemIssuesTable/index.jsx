import React from 'react'
import { Table } from 'antd'

const SystemIssuesTable = props => {
    const { list } = props
    const columns = [
        {
            title: '系统提醒',
            dataIndex: 'msg',
            key: 'msg',
            align: 'center',
            render: text => <span>{text}</span>,
        },
        {
            title: '提交时间',
            key: 'time',
            dataIndex: 'time',
            align: 'center',
            render: time => (<span>{time}</span>),
        },
        {
            title: '操作',
            key: 'edit',
            align: 'center',
            render: (text, record) => (
                <span>
                    <a>详情</a>
                </span>
            ),
        },
    ];

    const data = [
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
    ];
    return (
        <div className='workbench-table'>
            <Table bordered className='submit-table mt-30' dataSource={list} columns={columns} />
        </div>
    )
}

export default SystemIssuesTable