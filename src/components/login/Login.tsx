import * as React from "react";
//@ts-ignore
import Wizard from "../../components/forms/Wizard";
// @ts-ignore

import {useAppDispatch} from "../../redux/hooks";
import {changeTitle} from "../../redux/pageTitleSlice";
import {Button, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form} from "react-final-form";

import {validateLogin} from "../../components/forms/validate";

// @ts-ignore
import WizardSignup from "../../components/forms/WizardSignup.jsx";
import axios from "axios";
import Error from "../../components/forms/Error";
import {changeUserLogInfo} from "../../redux/userLogInfoSlice";


const Login = () => {

    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch( changeTitle('Login Form'))
    },[])
const nav = useNavigate()
    const onSubmit = async (values: any) => {

        // @ts-ignore
        window.alert("Northern Neck Garbage Thanks you for signing up, Click Log in" + JSON.stringify(values, 0, 2))

        await axios.post('http://localhost:8080/auth/nngc/authenticate', values)
            .then((response) => {
                console.log('response',response)
                dispatch(changeUserLogInfo({userInfo:response.data.customer, isLoggedIn: true, token: response.data.token}))
         if(response.data.customer) {
             nav('/')
         }
            })
            .catch((error) => {
                console.log(error)
            })

            }


    // @ts-ignore
    return (

<WizardSignup
onSubmit={onSubmit}
 >
    <Wizard.Page
        validate={validateLogin}
    >
        <div>
            <label>Email</label>
            <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
            />
            <Error name="email" />
        </div>
        <div>
            <label>Password</label>
            <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
            />
            <Error name="password" />
        </div>
    </Wizard.Page>
</WizardSignup>

    )
}
export default Login