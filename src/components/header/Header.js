import React from 'react'
import {connect} from 'react-redux'
import {setName} from '../store/action'
import {
    Layout,
  } from 'antd'
  const {Header} = Layout

class Myheader extends React.Component {


    render(){
        return (
            <Header style={{
                background: '#fff',
                padding: 0
              }}/>
        )
    }
}

const mapStateToProps = state => ({name: state.userInfo.name})

export default connect(mapStateToProps, {setName})(Header);