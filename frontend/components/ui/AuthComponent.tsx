"use client"
import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { capitalizeKey } from '@/lib/utils'
import { useRouter } from 'next/navigation'

type AuthComponentProps = {
    type: "register" | "login",
    styles?: {   // Expecting Tailwind
        container?: string,
        title?: string,
        inputsContainer?: string,
        inputs?: string,
        button?: string
    }
    values?: {
        title?: string,
        unPlaceholder?: string,
        pwPlaceholder?: string,
        buttonText?: string,

    }
}

const defaultConfig: Omit<AuthComponentProps, "type"> = {
    styles: {
        container: `flex flex-col justify-around items-center bg-gray-800 h-full rounded-xl w-1/3 shadow-xl`,
        title: `text-[2rem] text-customCyan bg-gray-900 px-12 py-6 rounded-xl font-bold mt-8`,
        inputsContainer: `flex flex-col items-center`,
        inputs: ` text-[1.5rem] p-2 m-2 bg-black rounded-xl text-customCyan flex text-center`,
        button: `bg-gray-900 text-[1.5rem] px-12 py-2 
        text-white rounded-xl
        hover:bg-black hover:text-customCyan`
    },
    values: {
        unPlaceholder: `Enter Username`,
        pwPlaceholder: `Enter Password`,
        buttonText: "Submit",
    }
}

const AuthComponent = ({
    type,
    styles,
    values,
}: AuthComponentProps) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { register, login } = useAuthContext();
    const router = useRouter()

    const handleUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        switch (type) {
            case "login":
                return login(username, password)
            case 'register':
                return register(username, password)
        }
    }

    const handleNewAccount = () => {
        router.push("/auth/register");
    }
    const handleAsGuest = () => {
        router.push("/");
    }

    return (
        <div
            className={styles?.container || defaultConfig.styles?.container}
        >
            <h1
                className={styles?.title || defaultConfig.styles?.title}
            >{values?.title || capitalizeKey(type)}</h1>
            <hr className='border-gray-600 w-2/3'></hr>
            <div className={styles?.inputsContainer || defaultConfig.styles?.inputsContainer}>
                <input
                    onChange={handleUsername}
                    placeholder={values?.unPlaceholder || defaultConfig.values?.unPlaceholder}
                    className={styles?.inputs || defaultConfig.styles?.inputs}
                />
                <input
                    onChange={handlePassword}
                    placeholder={values?.pwPlaceholder || defaultConfig.values?.pwPlaceholder}
                    className={styles?.inputs || defaultConfig.styles?.inputs}
                />
            </div>
            <button
                className={styles?.button || defaultConfig.styles?.button}
                onClick={handleSubmit}>{values?.buttonText || defaultConfig.values?.buttonText}
            </button>
            <hr className='border-gray-600 w-2/3' ></hr>
            {(type == 'login') && (
                <button
                    className='text-white bg-gray-700 hover:bg-gray-500 rounded-2xl text-xl py-2 px-8'
                    onClick={handleNewAccount}
                >Create a New Account</button>
            )}
            <button
                className={`text-customCyan hover:bg-gray-500 rounded-2xl text-xl py-2 px-8`}
                onClick={handleAsGuest}
            >Continue As Guest</button>
        </div>
    )
}

export default AuthComponent