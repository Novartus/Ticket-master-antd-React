import React, { Component } from "react";
import { Table } from "antd";
import { TicketColumns } from "../constants/TicketColumns";

class AllTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <Table
          columns={TicketColumns}
          dataSource={this.state.data}
          scroll={{ x: 1400, y: 300 }}
        />
      </div>
    );
  }
}

export default AllTickets;
