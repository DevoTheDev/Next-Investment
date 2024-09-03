import AuthComponent from '@/components/ui/AuthComponent'
import React from 'react'

type RegisterProps = {
  
}

const Register = ({

}: RegisterProps) => {
  return (
    <div className='bg-gray-600 p-12 h-lvh flex justify-center'>
    <AuthComponent type='register' values={{ buttonText: "Sign Up", title: "Sign Up for a New Account" }} />
    </div>
  )
}

export default Register