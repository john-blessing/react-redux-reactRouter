import './About.css';

import React, { Component } from 'react';

import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class About extends Component {
  componentDidMount(){
    window.localStorage.setItem('token', Math.random().toString(36).substr(6))
  }
  render() {
    return (
      <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        About
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
    );
  }
}

export default About;
