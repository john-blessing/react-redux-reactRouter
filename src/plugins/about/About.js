import './About.css';

import React, { Component } from 'react';
import Myheader from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

import { Layout, Breadcrumb, Row, Button } from 'antd';
const { Content, Footer } = Layout;

class About extends Component {
  componentDidMount() {

  }
  handleClick () {
    
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sidebar />
        <Layout>
          <Myheader />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Row
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360
              }}>
              <Button onClick={this.handleClick.bind(this)}>点击</Button>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


export default About;
