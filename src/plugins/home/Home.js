import './Home.css'

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {setName} from '../../store/action'
import Carosel from "../../components/carosel/Carosel"
import Auth from '../../components/Auth'
import Myheader from '../../components/header/Header'

import {
  Layout,
  Breadcrumb,
  Button,
  Row
} from 'antd'
const { Content, Footer} = Layout

class Home extends Auth {
  static propTypes = {
    name: PropTypes.string
  }
  
  handleClick(v){
    this.props.setName('hello world')
  }

  render() {
    const {name} = this.props
    return (
      <Layout>
        <Myheader />
        <Content style={{
          margin: '0 16px'
        }}>
          <Breadcrumb style={{
            margin: '16px 0'
          }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Row
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 360
            }}>
            <Carosel />
            <p>{name}</p>
            <Button onClick={this.handleClick.bind(this)}>click</Button>
            <Row>
              {this.state.token ? 'hello world' : ''}
            </Row>
            <Button type="primary" onClick={() => window.localStorage.removeItem('token')}>删除token</Button>
          </Row>
        </Content>
        <Footer style={{
          textAlign: 'center'
        }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({name: state.userInfo.name})

export default connect(mapStateToProps, {setName})(Home);
