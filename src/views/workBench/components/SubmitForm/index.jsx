import React from 'react'
import { Form, Input, Button, Select, Icon } from 'antd'
const { Search } = Input;
import "./index.less";

const SubmitForm = props => {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    return (
        <Form layout="inline" >
            <Form.Item >
                {getFieldDecorator('username', {})(
                    <Search
                        placeholder="请输入提交人"
                        onSearch={value => console.log(value)}
                        style={{ width: 265 }}
                    />
                )}
            </Form.Item>
            <Form.Item  label='申请类型'>
                {getFieldDecorator('type', {
                    rules: [{ message: 'Please input your Password!' }],
                })(
                    <Select placeholder="请选择" style={{ width: 265 }}>
                        <Option value="all">全部</Option>
                        <Option value="usa">加入公司</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label='处理结果'>
                {getFieldDecorator('result', {
                    rules: [{ message: 'Please select!' }],
                })(
                    <Select placeholder="请选择" style={{ width: 265 }}>
                        <Option value="all">全部</Option>
                        <Option value="pending">待处理</Option>
                        <Option value="passed">已通过</Option>
                        <Option value="refused">已拒绝</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    搜索
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Form.create()(SubmitForm)