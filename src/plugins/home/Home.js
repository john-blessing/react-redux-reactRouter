import './Home.css'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setName} from '../../store/action'

import {
  Layout,
  Breadcrumb,
  Button,
  Input,
  Row,
  Col
} from 'antd'
const {Header, Content, Footer} = Layout

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleAdd(v) {
    // this.props.setName('hello world')
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, setName} = this.props
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
          <Input
            placeholder="Basic usage"
            value={this.state.name}
            onChange={this
            .handleChange
            .bind(this)}/>
          <Row
            style={{
            padding: 24,
            background: '#fff',
            minHeight: 360
          }}>
            <Row>Home, {name}</Row>
            <Row>
              <Button type="primary" onClick={() => setName(this.state.name)}>click me</Button>
            </Row>
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
