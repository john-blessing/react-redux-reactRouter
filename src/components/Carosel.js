import './Carosel.css'

import React from 'react'

export default class Carosel extends React.Component {

    componentDidMount(){
        // console.log(this.carosel.children.length);
    }

    render(){
        return (
            <div ref={el => this.carosel = el} className="carosel">
                <div className="carosel-item">1</div>
                <div className="carosel-item">2</div>
                <div className="carosel-item">3</div>
            </div>
        )
    }
}