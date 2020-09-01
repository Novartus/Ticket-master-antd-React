import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { formItemLayout, tailFormItemLayout } from "../constants/Layout";

const { Option } = Select;

class Register extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Received values of form: ", e.value);
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  render() {
    const prefixSelector = (
      <Select style={{ width: 70 }}>
        <Option value="86">+91</Option>
      </Select>
    );

    return (
      <Form
        {...formItemLayout}
        onSubmit={this.handleSubmit}
        className="register-form"
      >
        <div className="logo">
          <img src={""} alt="Ticket Master" />
        </div>
        <Form.Item label="Username">
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item label="E-mail">
          <Input />
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          <Input.Password />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Register;
