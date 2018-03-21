import './Home.css'

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {setName} from '../../store/action'
import Carosel from "../../components/Carosel"
import Utils from '../../utils/Utils'

import {
  Layout,
  Breadcrumb,
  Button,
  Input,
  Row
} from 'antd'
const {Header, Content, Footer} = Layout

class Home extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  handleClick(v){
    // console.log(setName)
    // setName('hello world');
    this.props.setName('hello world')
  }

  render() {
    const {name} = this.props
    return (
      <Layout>
        <Header style={{
          background: '#fff',
          padding: 0
        }}/>
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
