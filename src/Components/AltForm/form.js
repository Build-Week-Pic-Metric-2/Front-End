import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {withFormik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationForm = ({username, password, confirmPassword, errors, touched, handleChange, setFieldTouched, isValid}) =>{
        const change = (username, e) => {
            e.persist();
            handleChange(e);
            setFieldTouched(username, true, false);
        };
        return (
            <Form className="container login">
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
                <TextField
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
                    disabled={!isValid}
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
            ConfirmPassword: confirmPassword || "",
    }
    },

    validationSchema: Yup.object().shape({
        username: Yup
            .string("Enter a Username")
            .required("Username is required"),
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
        axios
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