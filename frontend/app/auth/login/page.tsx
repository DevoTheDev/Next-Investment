import AuthComponent from '@/components/ui/AuthComponent'
import React from 'react'

type LoginProps = {}

const Login = ({
  
}: LoginProps) => {
  return (
    <div className="bg-gray-600 h-lvh px-12 flex justify-center">
    <AuthComponent type='login' values={{ buttonText: "Log In", title: "Sign In to Your Account" }} />
    </div>
  )
}

export default Login