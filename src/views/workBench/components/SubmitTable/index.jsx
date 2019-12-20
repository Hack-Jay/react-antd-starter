import React from 'react'
import { Table } from 'antd'
import SubmitForm from '../SubmitForm'
import "./index.less";

const SubmitTable = props => {
    const { list, setDetailShow } = props
    const columns = [
        {
            title: '申请类型',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
            render: text => <span>{text}</span>,
        },
        {
            title: '提交人',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: '职位',
            dataIndex: 'job',
            key: 'job',
            align: 'center',
        },
        {
            title: '提交时间',
            key: 'time',
            dataIndex: 'time',
            align: 'center',
            render: time => (<span>{time}</span>),
        },
        {
            title: '处理结果',
            key: 'result',
            dataIndex: 'result',
            align: 'center',
            render: text => (<span>{text}</span>),
        },
        {
            title: '操作',
            key: 'edit',
            align: 'center',
            render: (text, record) => (
                <span>
                    <a onClick={() => setDetailShow(true)}>详情</a>
                </span>
            ),
        },
    ];

    const data = [
        {
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
        },
    ];
    return (
        <div className='workbench-table'>
            <SubmitForm />
            <Table bordered className='submit-table mt-30' dataSource={list} columns={columns} />
        </div>
    )
}

export default SubmitTable