import React, { Component } from "react";
import { Layout } from "antd";
import DeveloperImg from "../images/developer.png";

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content style={{ padding: "0 50px", marginTop: 50 }}>
            <div className="home-content">
              <h5>Ticket-Master</h5>
              <img src={DeveloperImg} alt="Ticket-Master" />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Home;
