import React from 'react'
import axios from 'axios'
import '../Common.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputfield from './Inputfield'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const SignupForm = () => {

    const navigate = useNavigate()

    const submitHandler = (values,action) => {

            axios({
                method: "post",
                url: "http://localhost:5000/api/user/addUser",
                data: values,
              }).then(() => console.log("Signed-up")).catch(() => console.log("Error occured in sign-up"))

            navigate('/dashboard')

    }

    const validate = Yup.object({
        name:Yup.string().max(15,"Name must be less than or equal to 15 characters").required("It is a required field"),
        email:Yup.string().email().required("It is a required field"),
        password:Yup.string().min(6,"Password must be of minimum 6 characters").required("It is a required field"),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],"Password must match").required("It is a required field")
    })
    return (

        <div style={{height:"100vh",background:"#242582"}}>

        <Formik
        initialValues={{
            name: "",
            email:"",
            password:"",
            confirmPassword:""
        }}
        
        validationSchema={validate}
        onSubmit={submitHandler}
        >
            {
                formik => (
                    <>
                        <div className='signup-head' style={{ color: "white" }}> Welcome to the <p style={{ color: "rgb(255,81,81)", display: "inline" }}>Aisle</p></div>
                        
                        <Form method='POST'  className='form-input mt-4'>
                            <Inputfield placeholder = "Enter Name" type = "text" name = "name" />
                            <Inputfield placeholder = "Enter E-mail" type = "email" name = "email"/>
                            <Inputfield placeholder = "Enter Password" type = "password" name = "password"/>
                            <Inputfield placeholder = "Confirm Password" type = "password" name = "confirmPassword"/>

                            <div className='d-flex justify-content-between mt-5'>
                                <Button style={{color:"white",background:"rgb(255,81,81)",fontSize:"1.25rem",fontFamily:"sans-serif",margin:"auto"}} className="w-25 shadow-none mt-2" type='submit'>Register</Button>
                                
                                <Button style={{color:"black",background:"white",fontSize:"1.25rem",fontFamily:"sans-serif",margin:"auto"}} className="w-25 shadow-none mt-2" type='reset' >Reset</Button>
                            </div>
                            <a href='/dashboard' className="mt-3" style={{fontSize:"1.2rem",color:"rgb(255,81,81)",textAlign:"center"}}>Already a member? Log-in</a>
                        </Form>
                    
                    </>
                )

            }
        </Formik>
        </div>
    )
}

export default SignupForm