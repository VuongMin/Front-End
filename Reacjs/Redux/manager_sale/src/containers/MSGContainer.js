import React, { Component } from 'react'
import Meseages  from '../components/Meseages'
import PropTypes from "prop-types";
import * as action from '../actions/index'
import {connect} from 'react-redux'
class MSGContainer extends Component {
    render() {
        return (
            <div>
                 <Meseages>{this.props.msg}</Meseages>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        msg: state.msg
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Meseages)