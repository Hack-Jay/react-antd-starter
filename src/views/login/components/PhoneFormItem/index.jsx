import React, { useState, useRef } from "react";
import { Form, Input, Icon, Button, Row, Col } from "antd";

const NormalFormItem = props => {
  const [count, setCount] = useState(0);
  const { getFieldDecorator, onGetCaptcha } = props;

  const intervalRef = useRef();
  let interval
  const GetCaptcha = () => {
    const { onGetCaptcha } = props;
    const result = onGetCaptcha ? onGetCaptcha() : null;

    if (result === false) {
      return;
    }

    if (result instanceof Promise) {
      result.then(runGetCaptchaCountDown);
    } else {
      runGetCaptchaCountDown();
    }
  };

  const runGetCaptchaCountDown = () => {
    const { countDown } = props;
    let count = countDown || 59;
    setCount(count)

    interval = window.setInterval(() => {
      count -= 1;
        setCount(count)

      if (count === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <>
      <Form.Item>
        {getFieldDecorator("phone", {
          rules: [{ required: true, message: "请输入手机号!" }]
        })(
          <Input
            className='form-input'
            size="large"
            prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="请输入手机号"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Row gutter={8}>
          <Col span={17}>
            {getFieldDecorator("code", {
              rules: [{ required: true, message: "请输入验证码!" }]
            })(
              <Input
                className='form-input'
                size="large"
                type="password"
                placeholder="请输入验证码"
              />
            )}
          </Col>
          <Col span={7}>
            <Button size="large" className='form-btn' onClick={GetCaptcha} disabled={!!count}>
              {/* 获取验证码 */}
              {count ? `${count} ${'秒'}` : '获取验证码'}
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </>
  );
};


export default NormalFormItem;
