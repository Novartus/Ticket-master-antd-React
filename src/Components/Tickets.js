import React, { Component } from "react";
import { Form, Input, Button, Radio, Select } from "antd";
import { formItemLayout, tailFormItemLayout } from "../constants/Layout";

const { TextArea } = Input;
const { Option } = Select;

class Tickets extends Component {
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

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <Form
        {...formItemLayout}
        onSubmit={this.handleSubmit}
        className="register-form"
      >
        <Form.Item label="App Name">
          <Input placeholder="App Name" />
        </Form.Item>
        <Form.Item label="Subject">
          <Input />
        </Form.Item>
        <Form.Item label="Priority">
          <Radio.Group>
            <Radio value="low">Low</Radio>
            <Radio value="medium">Medium</Radio>
            <Radio value="high">High</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Description">
          <TextArea placeholder="Enter Here" />
        </Form.Item>
        <Form.Item label="Department">
          <Select
            setFieldsValue="select"
            style={{ width: 120 }}
            onChange={this.handleChange}
          >
            <Option value="technical">Technical</Option>
            <Option value="sales">Sales</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Tickets;
