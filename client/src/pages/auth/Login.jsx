import Form from '@/components/common/Form'
import { loginFormControl } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  let initialState={
    userName:"",
    email:'',
    password:""

  }
  // function onSubmit(){
    
    
  // };

  function onSubmit() {
     
  }
  const [formData,setFormData]=useState(initialState)
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'> 
        <h1 className='text-3xl font-bold tracking-tighter text-foreground'> Login your account</h1>
      <p className='mt-2'>Dont  have an account 
      <Link className='ml-3 text-primary font-medium hover:underline'  to="/auth/register">signup</Link>

      </p>
      </div>
      <Form
      formControls={loginFormControl}
      buttonText={"login"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login