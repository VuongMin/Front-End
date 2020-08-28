import React, { Component } from 'react'

export default class Meseages extends Component {
    render() {
         var {msg}=this.props;
        return (
            <div>
                <div className="msg">{msg}</div>
            </div>
        )
    }
}
