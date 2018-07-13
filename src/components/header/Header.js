import React from 'react'

import * as user from '../../api/user'
import StoreAdaper from '../../store/StoreAdaper';

import {
    Layout, Row, Button, message
  } from 'antd'

const {Header} = Layout

class Myheader extends React.Component {
  handleLogout() {
    user.logout().then(res => {
      let data = res.data
      if (data.content) {
        window.localStorage.setItem("isLogin", 0)
        this.props.history.push('/login')
      } else {
        message.error("登出失败")
      }
    })
    
  }
  render(){
    return (
      <Layout style={{flex: 'none', width: '100%'}}>
        <Header style={{
            background: '#fff',
            padding: 0
        }}>
          <Row type="flex" justify="end" align="top">
            <div style={{"marginRight": "16px"}}><Button onClick={this.handleLogout.bind(this)}>退出</Button></div>
          </Row>
        </Header>
      </Layout>
    )
  }
}

export default StoreAdaper(Myheader);