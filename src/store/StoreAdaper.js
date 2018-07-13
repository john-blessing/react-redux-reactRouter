import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";

export default function StoreAdaper(NeedComponent) {
  class Helper extends React.Component {
    render() {
      return <NeedComponent {...this.props} />
    }
  }
  return connect(state => state, { commit: (type, value) => (dispatch, getState) => {
    dispatch({
        type,
        value
    })
}})(withRouter(Helper))
}