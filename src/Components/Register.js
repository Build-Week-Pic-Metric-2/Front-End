// import React, { useState, useEffect } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import collage from "./images/piccollage.jpg"
// import photo from "./images/takingPhoto.jpg"


// const RegistrationForm = ({ values, errors, touched, status }) => {
//     const [user, setUser] = useState([]);
//     useEffect(()=>{
//         status && setUser(user => [...user, status])
//     },[status]);

//     return (
//         <div className="user-form">
//             <img src={collage} width= "400" height ="350" className="collage" alt="Pic Collage"/>
//             <Form className='form'>
//                 <h1 className="reg-h1">Create an account to get started!</h1>
//                 <div className="field-error">
//                     <Field className='form-field' type="text" name="username" placeholder="Username"/>
//                     {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
//                 </div>
//                 <div className="field-error">
//                     <Field className='form-field' type="text" name="password" placeholder="password"/>
//                     {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
//                 </div>
//                 <div className="field-error">
//                     <p className='form-field tos'><Field type="checkbox" name="tos" checked={values.tos}/>Terms of Service</p>
//                     {touched.tos && errors.tos && (<p className='error'>{errors.tos}</p>)}
//                 </div>
//                 <button className="reg-btn">Create Account</button>
//             </Form>
//             {user.map(users => (
//                 <div>
//                     <p>You have successfully created an account under ${users.username} and can log in.</p>
//                 </div>
//             ))}
//             <img src={photo}  width= "400" height= "350" className="photo" alt="Person taking pic" />
//         </div>
//     );
// };

// const FormikUserForm = withFormik({
//     mapPropsToValues({username, password, tos}){
//         return{
//             username: username || "",
//             password: password || "",
//             tos: tos || false,
//         }
//     },
//     validationSchema: Yup.object().shape({
//         username: Yup
//             .string()
//             .max(15)
//             .required(),

//         tos: Yup.bool().oneOf([true], `You Must Agree to the ToS.`)
//     }),
//     handleSubmit({ username, password, props}){
//         axios
//             .post("https://picmetric1.herokuapp.com/api/auth/register", {username, password})
//             .then(res =>{
//                 console.log(res);
//                 props.history.push("/login")
//             })
//             .catch(err => {
//                 console.log(err.response)
//             })
//     }
// })(RegistrationForm);

// export default FormikUserForm;


import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {withFormik, Form } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import {axiosWithAuth} from "../helpers/api";


const RegistrationForm = ({username, password, confirmPassword, errors, touched, handleChange, setFieldTouched}) =>{
        const change = (username, e) => {
            e.preventDefault();
            handleChange(e);
            setFieldTouched(username, true, false);
        };
        return (
            <Form className="container">
                <h1>Create an account!</h1>
                <TextField
                    id="username"
                    name="username"
                    helperText={touched.username ? errors.username : ""}
                    error={touched.username && Boolean(errors.username)}
                    label="Username"
                    value={username}
                    onChange={change.bind(null, "username")}
                    fullWidth

                />
                <TextField
                    id="password"
                    name="password"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    label="Password"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={change.bind(null, "password")}

                />
                <TextField style={{marginBottom: '2%'}}
                    id="confirmPassword"
                    name="confirmPassword"
                    helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    label="Confirm Password"
                    fullWidth
                    type="password"
                    value={confirmPassword}
                    onChange={change.bind(null, "confirmPassword")}

                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='alt-button'
                    // disabled={!isValid}
                >
                    Create Account
                </Button>
            </Form>
        );
};

const FormikUserForm = withFormik({
    mapPropsToValues({username, password, confirmPassword}) {
        return {
            username: username || "",
            password: password || "",
            confirmPassword: confirmPassword || ""
    }
    },

    validationSchema: Yup.object().shape({
        username: Yup
            .string("Enter a username")
            .required("Name is required"),
        password: Yup
            .string()
            .min(8, "Password must contain at least 8 characters")
            .required("Enter your password"),
        confirmPassword: Yup
            .string("Enter your password")
            .required("Confirm your password")
            .oneOf([Yup.ref("password")], "Password does not match")
    }),
    handleSubmit({ username, password, props}){
        axiosWithAuth
            .post("https://picmetric1.herokuapp.com/api/auth/register", {username, password})
            .then(res =>{
                console.log(res);
                props.history.push("/login")
            })
            .catch(err => {
                console.log(err.response)
            })
    }
})(RegistrationForm);

export default FormikUserForm;