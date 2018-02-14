import './Home.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout, Breadcrumb, Button } from 'antd'
const { Header, Content, Footer } = Layout

class Home extends Component {
  handleAdd(v){
    this.props.addTodo('hello world')
  }

  render() {
    const { name } = this.props
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Home, {name}
            <Button type="primary" onClick={this.handleAdd.bind(this)}>click me</Button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  name: state.todoApp.name
})

const mapDispatchToProps = dispath => ({
  addTodo: (text) => {
    dispath({type: 'SET_NAME', text})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
