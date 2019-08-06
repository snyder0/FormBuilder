import React, { Component } from 'react'
import loginConfig from './loginConfig'
import Form from '../components/Form'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleSubmit = (payload) => {
        console.log(payload)
    }

    render() {
        return (
            <Form
                fields={loginConfig}
                onSubmit={this.handleSubmit}
            />
        )
    }
}