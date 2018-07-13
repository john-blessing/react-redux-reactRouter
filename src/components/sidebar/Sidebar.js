
import './Sidebar.css'

import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';
import StoreAdaper from '../../store/StoreAdaper';

const { Sider } = Layout;

class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      collapsed: true,
      menuList: [{
        key: '/home',
        label: '首页',
        icon: 'team'
      }, {
        key: '/about',
        label: 'About',
        icon: 'solution'
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
    const { avator } = this.props.base.userInfo
    return (
        <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse.bind(this)}
      >
        <div className="logo">
          <img src={avator} className="avator" alt="头像"/>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} selectedKeys={[this.state.currentMenu]} mode="inline" onClick={this.goRouter.bind(this)}>
          {
            this.state.menuList.map(item => {
              return  <Menu.Item key={item.key}>
                <Icon type={item.icon} />
                <span>{item.label}</span>
              </Menu.Item>
            })
          }
        </Menu>
      </Sider>
    );
  }
}

export default StoreAdaper(Sidebar)
