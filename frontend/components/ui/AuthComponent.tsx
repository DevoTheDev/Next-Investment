"use client"
import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
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
        container: `flex flex-col justify-evenly w-3/4 bg-gray-700`,
        title: `text-center text-customCyan bg-gray-800 w-1/2 text-2xl self-center rounded-xl p-2`,
        inputs: `text-center self-center bg-black text-white w-1/3 p-4 rounded-xl text-lg`,
        button: `text-center self-center bg-gray-900 hover:bg-customCyan text-customCyan hover:text-gray-900 w-1/4 p-4 rounded-full cursor-pointer text-xl font-bold`
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
        router.push("/home");
    }

    return (
        <div
            className={styles?.container || defaultConfig.styles?.container}
        >
            <div
                className={styles?.title || defaultConfig.styles?.title}
            >{values?.title}</div>
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
            <button
                className={styles?.button || defaultConfig.styles?.button}
                onClick={handleSubmit}>{values?.buttonText || defaultConfig.values?.buttonText}
            </button>
            {(type == 'login') && (
                <div
                    className={styles?.button || defaultConfig.styles?.button}
                    onClick={handleNewAccount}
                >Create a New Account</div>
            )}
            <div
                className={styles?.button || defaultConfig.styles?.button}
                onClick={handleAsGuest}
            >Continue As Guest</div>
        </div>
    )
}

export default AuthComponent