import React from 'react'

export default class Auth extends React.Component{
    constructor() {
        super();
        this.state = {
          name: '',
          fNum: 0,
          token: ''
        }
      }
    
      handleChange(event) {
        this.setState({name: event.target.value})
      }
      
      componentDidMount(){
        this.setState({token: window.localStorage.getItem('token')})
      }

}