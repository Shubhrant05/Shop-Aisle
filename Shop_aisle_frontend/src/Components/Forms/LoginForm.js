import React from 'react'
import axios from 'axios'
import '../Common.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputfield from './Inputfield'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {

    const navigate = useNavigate()

    const submitHandler = (values,action) => {

            axios({
                method: "post",
                url: "http://localhost:5000/api/user/login",
                data: values,
              }).then((res) => {
              
                if(res.status === 200 ){
                    console.log(res)
                    navigate('/dashboard') 
                }
               else{
                   console.log("error")
               }
              }).catch((res) => {
                  console.log(res)
                  alert("Entered email or password is wrong")
                })


    }

    const validate = Yup.object({

        email:Yup.string().email().required("It is a required field"),
        password:Yup.string().min(6,"Password must be of minimum 6 characters").required("It is a required field"),

    })
    return (

        <div style={{height:"100vh",background:"#242582"}}>

        <Formik
        initialValues={{
            email:"",
            password:""
        }}
        
        validationSchema={validate}
        onSubmit={submitHandler}
        >
            {
                formik => (
                    <>
                        <div className='signup-head' style={{ color: "white" }}> Walk-in the <p style={{ color: "rgb(255,81,81)", display: "inline" }}>Aisle</p></div>
                        
                        <Form method='POST'  className='form-input mt-4'>
                            <Inputfield placeholder = "Enter E-mail" type = "email" name = "email"/>
                            <Inputfield placeholder = "Enter Password" type = "password" name = "password"/>

                            <div className='d-flex justify-content-between mt-5'>
                                <Button style={{color:"white",background:"rgb(255,81,81)",fontSize:"1.25rem",fontFamily:"sans-serif",margin:"auto"}} className="w-25 shadow-none mt-2" type='submit'>Login</Button>
                                
                                <Button style={{color:"black",background:"white",fontSize:"1.25rem",fontFamily:"sans-serif",margin:"auto"}} className="w-25 shadow-none mt-2" type='reset' id='reset'>Reset</Button>
                            </div>

                        </Form>
                    
                    </>
                )

            }
        </Formik>
        </div>
    )
}

export default LoginForm