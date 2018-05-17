import React from 'react'
import { Modal } from 'antd';

export default class OpenModal extends React.Component {

    constructor(){
        super();
        this.state = {
            isVisible: false
        }
    }
    
    handleOk(){
        this.setState({
            isVisible: false
        })
    }

    handleCancel(){
        this.setState({
            isVisible: false
        })
    }
    
    componentWillReceiveProps(newProps){
        this.setState({
            isVisible: newProps.visible
        })
    }

    render(){
        return (
            <Modal
                title="Basic Modal"
                visible={this.state.isVisible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        )
    }
}
