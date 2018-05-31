
import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      collapsed: false,
      menuList: [{
        key: '/home',
        label: 'Home'
      }, {
        key: '/about',
        label: 'About'
      }],
      currentMenu: ''
    };
  }

  onCollapse(collapsed){
    this.setState({ collapsed });
  }
  
  goRouter(item, key, keypath){
    this.props.history.push(item.key)
  }
  componentDidMount () {
    this.setState({
      currentMenu: this.props.history.location.pathname
    })
  }
  render() {
    return (
        <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse.bind(this)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} selectedKeys={[this.state.currentMenu]} mode="inline" onClick={this.goRouter.bind(this)}>
          {
            this.state.menuList.map(item => {
              return  <Menu.Item key={item.key}>
                <Icon type="pie-chart" />
                <span>{item.label}</span>
              </Menu.Item>
            })
          }
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
