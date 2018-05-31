import './Home.css'
import api from '../../api/config'

import React from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { connect } from 'react-redux'
import { setName } from '../../store/action'
import Auth from '../../components/Auth'
import Myheader from '../../components/header/Header'

import Sidebar from '../../components/sidebar/Sidebar'

import {
  Layout,
  Breadcrumb,
  Row,
  Button,
  message,
  Input
} from 'antd'
const { Content, Footer } = Layout

class Home extends Auth {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editorState: EditorState.createEmpty(),
      inputVal: ''
    }
  }

  componentDidMount() {
    this.queryAllStudent()
  }

  componentWillUnmount() {

  }

  handleClick(v) {
    this.props.setName('hello world')
  }

  gotoAbout() {
    this.props.history.replace('/about/10/company')
  }

  hanldelSetVisilbe() {
    this.setState({
      visible: true
    })
  }

  queryAllStudent() {
    api.get('findAllStudent')
      .then(res => {
        let data = res.data
        if (data.res_code < 0) {
          this.props.history.push('/login')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  };

  handleSave() {
    api.put(`updateArticle?a_id=${this.state.inputVal}`, {
      title: 'hello world',
      content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    })
      .then(res => {
        let data = res.data
        if(data.res_code > 0){
          message.success('保存成功')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  getVal (e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {
    const { editorState } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sidebar />
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
              <Row>
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={this.onEditorStateChange.bind(this)}
                >
                </Editor>
              </Row>
              <Row style={{marginTop: '15px'}}>
                分页: 第<Input style={{width: '200px'}} placeholder="请输入" value={this.state.inputVal} onChange={this.getVal.bind(this)}/>页
              </Row>
              <Row style={{marginTop: '15px'}}>
                <Button type="primary" onClick={this.handleSave.bind(this)}>保存</Button>
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

const mapStateToProps = state => ({ name: state.userInfo.name })

export default connect(mapStateToProps, { setName })(Home);
