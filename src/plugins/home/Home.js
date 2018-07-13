import './Home.css'

import React from 'react'
import PropTypes from 'prop-types'
import Myheader from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {
  Layout,
  Row
} from 'antd'

const { Content, Footer } = Layout

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      userInfo: null
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sidebar {...this.state.userInfo}/>
        <Layout>
          <Myheader/>
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
