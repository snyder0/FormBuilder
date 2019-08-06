import React, { Component } from 'react'
import MaterialUIButton from '@material-ui/core/Button'

export default class Button extends Component {
    render() {
        return (
            <MaterialUIButton
                {...this.props.config}
                onClick={this.props.callback ? this.props.callback : null}
            >
                {this.props.label}
            </MaterialUIButton>
        )
    }
}