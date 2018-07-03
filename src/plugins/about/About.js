import './About.css';

import { connect } from 'react-redux'
import { setName } from '../../store/action'
import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'

import { Layout, Breadcrumb, Row, Button } from 'antd';
const { Header, Content, Footer } = Layout;

class About extends Component {
  componentDidMount() {

  }
  handleClick () {
    this.props.setName('hello, kitty')
  }
  render() {
    const { name } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sidebar />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
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

const mapStateToProps = state => ({ name: state.userInfo.name })

export default connect(mapStateToProps, { setName })(About);
