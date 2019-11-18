import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegistrationForm = ({ values, errors, touched, status }) => {    
    const [user, setUser] = useState([]);
    useEffect(()=>{
        status && setUser(user => [...user, status])
    },[status]);

    return (
        <div className={"user-form"}>
                        <Form>
                <Field type="text" name="username" placeholder="Username"/>
                {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
                <Field type="text" name="email" placeholder="user@email.com"/>
                {touched.email && errors.email && (<p className='error'>{errors.email}</p>)}
                <Field type="text" name="password" placeholder="password"/>
                {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                <Field type="checkbox" name="tos" checked={values.tos}/>
                {touched.tos && errors.tos && (<p className='error'>{errors.tos}</p>)}
                <button>submit</button>
            </Form>
            {/*{user.map(users => (*/}
            {/*    <ul key={user.id}>*/}
            {/*        <li>First Name: {users.username}</li>*/}
            {/*        <li>e-mail: {users.email}</li>*/}
            {/*        <li>password: {users.password}</li>*/}
            {/*    </ul>*/}
            {/*))}*/}
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({username, email, password, tos}){
        return{
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup
            .string()
            .max(15)
            .required(),
        email: Yup
            .string()
            .email()
            .required(),
        password: Yup
            .string()
            .min(8)
            .required(),
        tos: Yup.bool().oneOf([true], `You Must Agree to the ToS.`)
    }),
    handleSubmit(values, {setStatus, resetForm}){
        axios
            .post("https://picmetric1.herokuapp.com/api/auth/register", values)
            .then(res =>{
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err.response)
            })
            .finally(resetForm())
    }
})(RegistrationForm);

export default FormikUserForm;