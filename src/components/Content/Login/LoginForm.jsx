import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const initialValues = {
    email: '',
    password: '',
    check: false
}

const onSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
});

const style = {
    color: 'red',
    paddingLeft: '10px',
}

const LoginForm = () => {
    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <div>
                        <Field type='text' name='email'/>
                        <ErrorMessage name='email'>
                            {errorMsg => <span style={style}>{errorMsg}</span>}
                        </ErrorMessage>
                    </div>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <div>
                        <Field type='password' name='password'/>
                        <ErrorMessage name='password'>
                            {errorMsg => <span style={style}>{errorMsg}</span>}
                        </ErrorMessage>
                    </div>
                </div>

                <div>
                    <Field type='checkbox' name='check'/>remember me
                </div>

                <button type='submit'>Login</button>

            </Form>
        </Formik>
    )
}

export default LoginForm;