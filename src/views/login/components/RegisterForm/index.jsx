import React, { useState, useEffect } from 'react'
import { Icon, Form, Input, Button, Checkbox } from 'antd'
import UserLayout from "@/layouts/UserLayout";
import PhoneFormItem from "../PhoneFormItem";

const RegisterFrom = props => {
    const [loading, setLoading] = useState(false);

    const { getFieldDecorator } = props.form
    const { onGetCaptcha, onSubmit, toRedirect } = props
    return (

        <UserLayout title='注册' toRedirect={toRedirect} text='使用已有账号登录' >
            <Form className='register-form'>
                <PhoneFormItem
                    {...props}
                    getFieldDecorator={getFieldDecorator}
                    onGetCaptcha={onGetCaptcha}
                    countDown={10}
                />
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{ required: true, message: "包含字母、数字的8-16位密码组合" }]
                    })(
                        <Input
                            size="large"
                            className='form-input'
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="包含字母、数字的8-16位密码组合"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password2", {
                        rules: [{ required: true, message: "请输入密码" }]
                    })(
                        <Input
                            size="large"
                            className='form-input'
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="确认密码"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("inviteCode", {
                        rules: [{ required: false }]
                    })(
                        <Input
                            size="large"
                            className='form-input'
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="邀请码，非必填项"
                        />
                    )}
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            同意遵守 <a href="">《有传用户协议》</a>及<a href="">《有传隐私政策》</a>
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button form-btn"
                        loading={loading}
                        onClick={onSubmit}
                    >
                        注册
                    </Button>

                </Form.Item>
            </Form>
        </UserLayout>
    )
}

export default Form.create()(RegisterFrom)