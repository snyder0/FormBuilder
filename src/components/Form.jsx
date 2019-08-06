import React, { Component } from 'react'
import TextField from './fields/TextField'
import Switch from './fields/Switch'
import Button from './fields/Button'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            config: this.props.fields,
            payload: {}
        }
    }

    handleChange = (value) => {
        this.setState({
            payload: {
                ...this.state.payload, 
                ...value
            }
        })
    }

    buildForm = () => {
        let config = this.state.config
        
        let form = config.map((field, index) => {
            switch (field.fieldType) {
                case 'text':
                    return  <TextField
                                key={index}
                                payloadKey={field.payloadKey}
                                onChange={this.handleChange}
                                config={field.config}
                            />
                case 'switch':
                    return  <Switch
                                key={index}
                                payloadKey={field.payloadKey}
                                onChange={this.handleChange}
                                config={field.config}
                            />
                case 'button':
                    return  <Button
                                key={index}
                                label={field.label}
                                callback={field.callback ? field.callback : ''}
                                config={field.config}
                            />
                default:
                    return <p>Field type not supported.</p>
            }
        })

        return form
    }

    submit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.payload)
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                {this.buildForm()}
            </form>
        )
    }
}