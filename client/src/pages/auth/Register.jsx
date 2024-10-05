import Form from '@/components/common/Form'
import { registerFormControl } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  let initialState={
    userName:"",
    email:'',
    password:""

  }
  function onSubmit(){};
  const [formData,setFormData]=useState(initialState)
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'> 
        <h1 className='text-3xl font-bold tracking-tighter text-foreground'> create new account</h1>
      <p className='mt-2'>already have an account
      <Link className='ml-3 text-primary font-medium hover:underline'  to="/auth/login">Login</Link>

      </p>
      </div>
      <Form
      formControls={registerFormControl}
      buttonText={"signUp"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  )
}
