import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Sheard/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {



    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);


    const location = useLocation()
    const naviget = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Error
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');



    // email input value & validation
    const emailClick = (e) => {
        const EmailRegex = /\S+@\S+\.\S+/;
        const emailValue = EmailRegex.test(e.target.value);
        if (emailValue) {
            setEmail(e.target.value);
            setEmailError('')
        } else {
            setEmailError('Please give the valid Email')
            setEmail('');
        }
    }


    // Password input value 
    const passwordClick = (e) => {
        const passwordValue = e.target.value;
        if (passwordValue.length >= 6) {
            setPassword(passwordValue);
            setPassError('')
        } else {
            setPassword('');
            setPassError('Please Give Minimum 6 Chrecter')
        }
    }



    // handel Login

    const handelLogin = (e) => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(email, password)
            setEmailError('')
            setPassError('')
        } else {
            setEmailError('Please Fill The Input')
            setPassError('Please Give Me the Password')
        }
        e.preventDefault()
    }


    // requirAuth
    const from = location.state?.from?.pathname || "/";


    // User successfully sign up
    if (user) {
        naviget(from, { replace: true });
        toast("Wow Sign Up Successfully!")
    }


    // User sign up error
    useEffect(() => {
        if (error?.code) {
            toast("Opps!! No User Found")
        }
    }, [error])

    // for loading

    if (loading) {
        return <Loading></Loading>
    }

    // password reset
    const resetPassword = async () => {
        if (email === '') {
            setEmailError('Please Give Me A Varified Email')
        } else {
            await sendPasswordResetEmail(email);
            toast('Sent Email')
            setEmailError('')
        }

    }


    return (
        <div className="login-container">
            <div className='mb-24 mx-5 '>
                <div className="  w-full lg:w-1/2 md:w-3/4 mx-auto bg-opacity-90 shadow-lg relative">

                    <div className=" p-5 mt-[8rem]   bg-opacity-60 backdrop-blur-lg rounded-lg ">
                        <h1 className='text-4xl font-semibold mb-5'>log In</h1>
                        <div className="h-[1px] w-full bg-black opacity-20 mb-10"></div>
                        <div className="flex flex-col text-left mb-8">
                            <label className=' text-xl ml-2 mb-2' htmlFor="email">Email</label>
                            <input onChange={emailClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="email" name="email" id="email" required />
                        </div>
                        {
                            emailError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {emailError}</p> : ''
                        }

                        <div className="flex flex-col text-left mb-8">
                            <label className=' text-xl  ml-2 mb-2' htmlFor="password">Password</label>
                            <input onChange={passwordClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="password" name="password" id="password" required />
                        </div>
                        {
                            passError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {passError}</p> : ''
                        }
                        <div className="btn-container mx-10 mt-10 mb-3">
                            <button onClick={handelLogin} className='w-1/2 bg-fuchsia-400 shadow-md py-2 text-2xl rounded text-white'>Log In</button>
                        </div>
                        <p className=' font-mono font-medium'>Create New Account? <span onClick={() => naviget('/signup')} className=' text-sky-700 cursor-pointer'>Sign Up</span></p>
                        <p className=' font-mono font-medium'>Forget Password? <span onClick={resetPassword} className=' text-sky-700 cursor-pointer'>Reset Password</span></p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                    </div>
                    <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-2  -z-10"></div>
                    <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-0 top-0  -z-10 opacity-60"></div>
                </div>

            </div>

        </div>






    );
};

export default Login;