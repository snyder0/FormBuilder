import React, { Component } from 'react'
import MaterialUISwitch from '@material-ui/core/Switch'

export default class Switch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: true
        }
    }

    handleChange = (event) => {
        this.setState({checked: !this.state.checked})
        this.props.onChange({
            [this.props.payloadKey]: this.state.checked
        })
    }

    render() {
        return (
            <MaterialUISwitch
                {...this.props.config}
                onChange={this.handleChange}
            />
        )
    }
}