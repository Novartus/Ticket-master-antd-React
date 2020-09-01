import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Received values of form: ", e.value);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div className="logo">
            <img src={""} alt="Ticket Master" />
          </div>
          <Form.Item>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
            <br />
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <br />
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
