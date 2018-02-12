import './App.css';

import About from './about/About'
import Home from './home/Home'

import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../store/action'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {

  constructor(){
    super();
    this.state = {
      collapsed: false,
    };
  }

  onCollapse(collapsed){
    this.setState({ collapsed });
  }

  handleSubmit(){
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: {
        username: 'tony',
        password: '1213'
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleSetName(){
    this.props.onTodoClick('tony')
  }

  gotoAbout(){
    this.props.history.push('/about')
  }

  render() {
    const { user_name } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse.bind(this)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <div>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  user_name: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    user_name: state.todoApp.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: name => {
      dispatch(addTodo(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
