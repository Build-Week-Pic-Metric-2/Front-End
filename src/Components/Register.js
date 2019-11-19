import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import api from "../helpers/api"
import collage from "./images/piccollage.jpg"
import photo from "./images/takingPhoto.jpg"


const RegistrationForm = ({ values, errors, touched, status }) => {    
    const [user, setUser] = useState([]);
    useEffect(()=>{
        status && setUser(user => [...user, status])
    },[status]);

    return (
        <div className="user-form">

            <img src={collage} width= "400" height ="350" className="collage" alt="Pic Collage"/>
            <Form className='form'> 

                <h1 className="reg-h1">Create an account to get started!</h1>
                <div className="field-error">
                    <Field className='form-field' type="text" name="username" placeholder="Username"/>
                    {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
                </div>
                <div className="field-error">
                    <Field className='form-field' type="text" name="password" placeholder="password"/>
                    {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                </div>
                <div className="field-error">
                    <p className='form-field tos'><Field type="checkbox" name="tos" checked={values.tos}/>Terms of Service</p>
                    {touched.tos && errors.tos && (<p className='error'>{errors.tos}</p>)}
                </div>
                <button className="reg-btn" type="submit">Create Account</button>
            </Form>
            {user.map(users => (
                <div>
                    <p>You have successfully created an account under ${users.username} and can log in.</p>
                </div>
            ))}
            <img src={photo}  width= "400" height= "350" className="photo" alt="Person taking photo" />
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({username, password, tos}){
        return{
            username: username || "",
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
    handleSubmit(values, props, {setStatus, resetForm}){
        
        api()
            .post("/register", values)
            .then(res =>{
                setStatus(res.data);
                console.log(res);
                props.history.push("/login")
            })
            .catch(err => {
                console.log(err.response)
            })
            .finally(resetForm())
    }
})(RegistrationForm);

export default FormikUserForm;
