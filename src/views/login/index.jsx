import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Input,
  Icon,
  Button,
  message,
  Checkbox
} from "antd";
import { withRouter } from "react-router-dom";
import UserLayout from "@/layouts/UserLayout";
import RegisterForm from './components/RegisterForm'
import NormalFormItem from "./components/NormalFormItem";
import PhoneFormItem from "./components/PhoneFormItem";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import "./login.less";

const Login = props => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [type, setType] = useState("phone");
  const [loading, setLoading] = useState(false);
  const registerForm = useRef(null);
  const { getFieldDecorator } = props.form;

  const handleLoginSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log('submit form', values)
      if (!err) {
        // let { username, password } = values
        // axios
        //     .post(`${API}/login`, { username, password })
        //     .then(res => {
        //         if (res.data.code === 0) {
        //             localStorage.setItem('user', JSON.stringify(res.data.data.user))
        //             localStorage.setItem('token', res.data.data.token)
        //             props.history.push('/')
        //             message.success('登录成功!')
        //         } else {
        //             // 这里处理一些错误信息
        //         }
        //     })
        //     .catch(err => {})

        // 这里可以做权限校验 模拟接口返回用户权限标识
        switch (values.username) {
          case "admin":
            values.auth = 0;
            break;
          default:
            values.auth = 1;
        }

        localStorage.setItem("user", JSON.stringify(values));
        setLoading(true);
        setTimeout(() => {
          message.success("登录成功!");
          props.history.push("/");
        }, 2000);
      }
    });
  };

  const onGetCaptcha = () => {
	const form = isLoginForm ? props.form : registerForm.current
    return new Promise((resolve, reject) => {
      form.validateFields(
        ["phone"],
        {},
        async (err, values) => {
          console.log("err", err, "values", values);
          if (err) {
            reject(err);
          } else {
            //   const { dispatch } = this.props;
            //   try {
            //     const success = await dispatch({
            //       type: "login/getCaptcha",
            //       payload: values.mobile
            //     });
            //     resolve(!!success);
            //   } catch (error) {
            //     reject(error);
            //   }

            // send code req
            resolve(true)
          }
        }
      );
    });
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    registerForm.current.validateFields((err, values) => {
      if (!err) {
		  console.log('register values', values)
      }
    });
  };

  return (
    <>
    {
      isLoginForm ? 
      <UserLayout title='登录' text={type === 'forgot' ? '返回' : ''} toRedirect={setType}>
        {type !== "forgot" ? (
          <>
            <Form onSubmit={handleLoginSubmit} className="login-form">
              {type === "account" ? (
                <NormalFormItem getFieldDecorator={getFieldDecorator} />
              ) : (
                  <PhoneFormItem
                    {...props}
                    getFieldDecorator={getFieldDecorator}
                    onGetCaptcha={onGetCaptcha}
                    countDown={60}
                  />
                )}
              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox> 自动登录 </Checkbox>)}
                <a
                  className="login-form-forgot"
                  href=""
                  onClick={e => {
                    e.preventDefault();
                    setType("forgot");
                  }}
                >
                  忘记密码
              </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button form-btn m-30"
                  loading={loading}
                >
                  登录
              </Button>

              </Form.Item>
            </Form>
            <div className='form-footer'>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  setType(type === "account" ? "phone" : "account");
                }}
              >
                {type === "account" ? "手机号登录" : "密码登录"}
              </a>
			  <a className="login-form-forgot"
			   onClick={e => {
				e.preventDefault();
				setIsLoginForm(false);
			  }}
			  >
                注册
          </a>
            </div>
          </>
        ) : (
            <>
              <ForgotPasswordForm {...props} onGetCaptcha={onGetCaptcha} changeType={setType} />
              <div className='form-footer'>
              </div>
            </>
          )}
      </UserLayout> : <RegisterForm ref={registerForm} toRedirect={setIsLoginForm} onSubmit={handleRegisterSubmit} onGetCaptcha={onGetCaptcha}/>
    } 
    </>
  );
};

export default withRouter(Form.create()(Login));
