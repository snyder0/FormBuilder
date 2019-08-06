import FieldType from '../lib/fieldType'

let loginConfig = [
    {
        fieldType: FieldType.TEXT,
        payloadKey: 'email',
        config: {
            placeholder: 'email',
            variant: 'outlined'
        }
    },
    {
        fieldType: FieldType.TEXT,
        payloadKey: 'password',
        config: {
            placeholder: 'password',
            variant: 'outlined'
        }
    },
    {
        fieldType: FieldType.SWITCH,
        payloadKey: 'switch',
        config: {
            placeholder: 'password'
        }
    },
    {
        fieldType: FieldType.BUTTON,
        label: 'test',
        callback: () => console.log('callback'),
        config: {
            size: 'large'
        }
    },
    {
        fieldType: FieldType.BUTTON,
        label: 'Login',
        config: {
            type: 'submit',
            size: 'large'
        }
    }
]

export default loginConfig