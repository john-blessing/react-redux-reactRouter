import './Carosel.css'

import React from 'react'

export default class Carosel extends React.Component {
    constructor(){
        super()
    }
    
    componentDidMount(){
        let arr = [0,1,2];
        console.log(this.carosel.children.length);
        /**
         * (0 - 1 - 2) -> (1 - 2 - 0) -> (2 - 0 - 1) 顺时针
         * 
         */
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