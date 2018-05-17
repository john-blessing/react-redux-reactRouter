import './Home.css'

import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {setName} from '../../store/action'
import Carosel from "../../components/carosel/Carosel"
import Auth from '../../components/Auth'
import Myheader from '../../components/header/Header'
import OpenModal from '../../components/OpenModal'

import {
  Layout,
  Breadcrumb,
  Button,
  Row
} from 'antd'
const { Content, Footer} = Layout

class Home extends Auth {

  constructor(){
    super();
    this.state = {
      visible: false
    }
  }

  handleClick(v){
    this.props.setName('hello world')
  }

  gotoAbout(){
    this.props.history.replace('/about/10/company')
  }

  hanldelSetVisilbe(){
    this.setState({
      visible: true
    })
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
            <Button type="primary" onClick={this.gotoAbout.bind(this)}>jump to About </Button>
            <Button onClick={this.hanldelSetVisilbe.bind(this)}>弹窗</Button>
            <OpenModal visible={this.state.visible}></OpenModal>
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

Home.propTypes = {
  name: PropTypes.string
};

const mapStateToProps = state => ({name: state.userInfo.name})

export default connect(mapStateToProps, { setName })(Home);
