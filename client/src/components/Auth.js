import React, { useContext, useState } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'
import '../styles/auth.css'
import Chef from './Chef.jpg'
const initInputs = { username: '', password: '' }

export default function Auth() {
    const [inputs, setInputs] = React.useState(initInputs)
    const [toggle, setToggle] = React.useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }


    return (
        <>
            <div className="container">
                <h1 className='rock'>Welcome To Recipe Logger!</h1>
                <img src={Chef} />
                {!toggle ?
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleSignup}
                            inputs={inputs}
                            btnText='Sign Up'
                            

                        />

                        <button onClick={toggleForm} className='mem'> Already A Member?</button>
                        <p style={{ color: "red" }}> {errMsg} </p>
                    </>
                    :
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            inputs={inputs}
                            btnText='Login'
                           

                        />

                        <button onClick={toggleForm} className='mem'> Not A Member?</button>
                        <p style={{ color: "red" }}> {errMsg} </p>
                    </>

                }
            </div>

        </>
    )
}