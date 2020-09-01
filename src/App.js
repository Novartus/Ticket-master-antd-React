import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Ticket from "./Components/Tickets";

import { Layout, Menu } from "antd";
import AllTickets from "./Components/AllTickets";

const { Header } = Layout;

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo-dummy">
              <h3>
                <Link to="/">Ticket-Master</Link>
              </h3>
            </div>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "60px" }}>
              <Menu.Item key="3">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/ticket">Raise Ticket</Link>
              </Menu.Item>
              <Menu.Item key="r">
                <Link to="/alltickets">Tickets</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/register">SignUp</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/ticket" component={Ticket} />
        <Route path="/alltickets" component={AllTickets} />
      </Switch>
    </Router>
  );
}

export default App;
