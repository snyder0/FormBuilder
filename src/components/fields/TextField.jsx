import React, { Component } from 'react'
import MaterialUITextField from '@material-ui/core/TextField'

export default class TextField extends Component {

    handleChange = (event) => {
        this.props.onChange({
            [this.props.payloadKey]: event.target.value
        })
    }

    render() {
        return (
            <MaterialUITextField
                {...this.props.config}
                onChange={this.handleChange}
            />
        )
    }
}