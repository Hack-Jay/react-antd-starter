import React from "react";
import { Form, Input, Icon, Button, Row, Col } from "antd";
import PhoneFormItem from "../PhoneFormItem";

const ForgotPasswordForm = props => {
  const { getFieldDecorator } = props.form;
  const { changeType, onGetCaptcha } = props
  return (
    <>
      <Form className="login-form">
        <PhoneFormItem getFieldDecorator={getFieldDecorator}
         {...props}
         getFieldDecorator={getFieldDecorator}
         onGetCaptcha={onGetCaptcha}
         countDown={20}
        />
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "请设置8 - 16位密码（包含字母、数字）"
              }
            ]
          })(
            <Input
              className='form-input'
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="请设置8 - 16位密码（包含字母、数字）"
            />
          )}
        </Form.Item>
        <Form.Item>
            <Button className="login-form-button" size="large" type='primary'>保存并登录</Button>
            {/* <Row gutter={8}>
                <Col span={12}>
                    <Button className="login-form-button" size="large" onClick={() => changeType('account')}>返回</Button>
                </Col>
                <Col span={12}>
                    <Button className="login-form-button" size="large" type='primary'>保存并登录</Button>
                </Col>
            </Row> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default Form.create()(ForgotPasswordForm);
