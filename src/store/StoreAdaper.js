import React from 'react'
import { connect } from 'react-redux'
import * as action from './action'
import {withRouter} from "react-router-dom";

export default function StoreAdaper(NeedComponent) {
  class Helper extends React.Component {
    render() {
      return <NeedComponent {...this.props} />
    }
  }
  return connect(state => state, { dispath: (type, value) => (dispatch, getState) => {
    dispatch({
        type,
        value
    })
}})(withRouter(Helper))
}