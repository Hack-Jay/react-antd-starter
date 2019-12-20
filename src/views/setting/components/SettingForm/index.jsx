import React from 'react'
import { Form, Input, Button } from 'antd'

const SettingForm = props => {
const { onSubmit } = props
const { getFieldDecorator } = props.form

    return <Form layout="inline" onSubmit={onSubmit}>
        <Form.Item >
            {getFieldDecorator('username', {})(
                <Input
                    placeholder="请输入姓名"
                    style={{ width: 265 }}
                />
            )}
        </Form.Item>  
        <Form.Item >
            {getFieldDecorator('phone', {})(
                <Input
                    placeholder="请输入提交人"
                    style={{ width: 265 }}
                />
            )}
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                搜索
            </Button>
        </Form.Item>
    </Form>
}

export default Form.create()(SettingForm)