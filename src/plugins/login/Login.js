import './Login.css'
import * as user from '../../api/user'

import StoreAdaper from '../../store/StoreAdaper';
import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
const FormItem = Form.Item;

class Login extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      user.login(values.userName, values.password).then(res => {
        let data = res.data
        if (data.res_code === 200){
          message.success("登录成功！");
          this.props.commit('SET_USER_INFO', data.content)
          this.props.history.push('/home')
          window.localStorage.setItem("isLogin", 1)
        } else {
          message.error(data.content);
        }
      })
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            initialValue: "jj4f",
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            initialValue: "199302082214",
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem style={{marginTop: '40px'}}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(StoreAdaper(Login));