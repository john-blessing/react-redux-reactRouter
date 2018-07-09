import './Home.css'

import React from 'react'
import PropTypes from 'prop-types'
import Auth from '../../components/Auth'
import Myheader from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {
  Layout,
  Row
} from 'antd'

const { Content, Footer } = Layout

class Home extends Auth {

  componentDidMount() {
    console.log(this.refs.h1) 
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sidebar />
        <Layout>
          <Myheader name="header"/>
          <Content style={{
            margin: '0 16px'
          }}>
            <Row
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
                marginTop: 18
              }}>
              <Row>
                <h1 ref="h1">111</h1>
              </Row>
            </Row>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
        </Layout>
      </Layout>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string
};


export default Home;
