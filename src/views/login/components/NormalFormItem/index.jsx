import React from "react";
import { Form, Input, Icon } from "antd";

const NormalFormItem = props => {
  const { getFieldDecorator } = props;
  return (
    <>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "请输入正确的手机号" }]
        })(
          <Input
            size="large"
            className='form-input'
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="请输入手机号"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "请输入密码!" }]
        })(
          <Input
            size="large"
            className='form-input'
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="请输入密码"
          />
        )}
      </Form.Item>
    </>
  );
};

export default NormalFormItem;
