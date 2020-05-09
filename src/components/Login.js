import React, { Component } from "react";
import './login.css';
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      greetings: 'LOGIN'
    }
  }

  render() {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <p>{this.state.greetings}</p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Username!" }]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={() => this.setState({ greetings: 'YOUR ARE NOW LOGGED IN!' })}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
               </Button>
            </Form.Item>
          </Form>
        </div>
      </div >
    );
  }
}

export default Login;
