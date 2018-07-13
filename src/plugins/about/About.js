import './About.css';

import React, { Component } from 'react';
import Myheader from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import StoreAdaper from '../../store/StoreAdaper';

import { Layout, Row, Button } from 'antd';
const { Content, Footer } = Layout;

class About extends Component {
  componentDidMount() {

  }

  handleClick () {
    this.props.commit('SET_NAME', 'hello world')
  }
  
  render() {
    const { name } = this.props.base
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sidebar />
        <Layout>
          <Myheader />
          <Content style={{ margin: '0 16px' }}>
            <Row
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
                marginTop: 18
              }}>
              {name}
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


export default StoreAdaper(About);
