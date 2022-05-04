import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { XIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Sheard/Loading/Loading';




const SignUp = () => {

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const naviget = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPass, setComfirmPass] = useState('');

    // Error
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [comfirmPassError, setComfirmPassError] = useState('');





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
    // Comfirm Password input value 
    const comfirmPassClick = (e) => {
        const comfirmPassValue = e.target.value;
        if (comfirmPassValue === password) {
            setComfirmPass(comfirmPassValue);
            setComfirmPassError('')
        } else {
            setComfirmPass('');
            setComfirmPassError('Please Give Correct Password')
        }
    }


    // Submit section
    const HanddleSignUp = (e) => {
        if (email !== '' && password !== '' && comfirmPass !== '') {
            createUserWithEmailAndPassword(email, password)
            setEmailError('')
            setPassError('')
            setComfirmPassError('')
        } else {
            setEmailError('Please Fill The Input')
            setPassError('Please Give Me the Password')
            setComfirmPassError('Please Give Me the comfirm Password')
        }
        e.preventDefault()

    }




    // User successfully sign up
    if (user) {
        naviget('/service')
        toast("Wow Sign Up Successfully!")
    }


    // User sign up error
    useEffect(() => {
        if (error?.code) {
            toast("Opps!! Please Check You Email & Pass")
        }
    }, [error])



    // For Loading
    if (loading) {
        return <Loading></Loading>
    };





    return (
        <div className='mb-24 mx-5'>
            <div className="w-full lg:w-1/3 md:w-2/3 mx-auto p-5 mt-[8rem] rounded-lg bg-green-200 ">
                <h1 className='text-4xl font-semibold mb-5'>Sign Up</h1>
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
                <div className="flex flex-col text-left mb-8">
                    <label className=' text-xl  ml-2 mb-2' htmlFor="ComfirmPassword">Comfirm Password</label>
                    <input onChange={comfirmPassClick} className='py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="password" name="ComfirmPassword" id="ComfirmPassword" required />
                </div>
                {
                    comfirmPassError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {comfirmPassError}</p> : ''
                }
                <div className="btn-container mx-10 mt-10 mb-3">
                    <button onClick={HanddleSignUp} className='w-1/2 bg-green-500 shadow-md py-2 text-2xl rounded text-white'>Sign Up</button>
                </div>
                <p className=' font-mono font-medium'>Already have an Account? <span onClick={() => naviget('/login')} className=' text-sky-700 cursor-pointer'>LogIn</span></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;