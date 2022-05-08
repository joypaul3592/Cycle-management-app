import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, FlagIcon, XIcon } from '@heroicons/react/outline'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Sheard/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const [signInWithGoogle, goolgeUser, googleLoading, googlEerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, Gituser, Gitloading, Giterror] = useSignInWithGithub(auth);

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [mainUser] = useAuthState(auth)

    const location = useLocation()
    const naviget = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Error
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [state, setState] = useState(false)


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




    const toggleBtn = () => {
        setState(prevState => !prevState)
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

    useEffect(() => {
        if (user) {
            naviget(from, { replace: true });
            toast.success("Login Successful!!")
        }
    }, [user])




    if (mainUser) {
        // 
        toast.success("Login Successful!!")
        const url = `https://secure-depths-99773.herokuapp.com/login`;
        const email = mainUser.email;
        console.log(email);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: mainUser.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.token)
                naviget(from, { replace: true });
                console.log(data.token)
            });

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

    useEffect(() => {
        if (error || Giterror || googlEerror) {
            toast("Opps!! User Not Found")
        }
    }, [error, Giterror])



    useEffect(() => {
        if (user || Gituser || goolgeUser) {
            naviget(from, { replace: true });
            toast.success('Social login Successful!!')
        }
    }, [user, Gituser])





    console.log(user)
    return (
        <div className="login-container">
            <div className='mb-24 mx-5 '>
                <div className="w-full lg:w-1/2 md:w-3/4 mx-auto bg-opacity-90 shadow-lg relative">

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
                            <div className="relative">
                                <input onChange={passwordClick} className='w-full py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl ' type={state ? 'text' : 'password'} name="password" id="password" required />

                                <div onClick={toggleBtn} className='w-6 absolute right-4 top-[25%]'>
                                    {
                                        state ? <EyeIcon ></EyeIcon> : <EyeOffIcon></EyeOffIcon>
                                    }

                                </div>
                            </div>
                        </div>
                        {
                            passError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {passError}</p> : ''
                        }
                        <div className="btn-container mt-10 mb-3">
                            <button onClick={handelLogin} className='w-full bg-fuchsia-800 shadow-md py-2 text-2xl rounded text-white mb-8'>Log In</button>
                        </div>
                        <p className=' font-mono font-medium'>Create New Account? <span onClick={() => naviget('/signup')} className=' text-fuchsia-800 cursor-pointer font-mono font-bold text-xl'>Register</span></p>

                        <p className=' font-mono font-medium'>Forget Password? <span onClick={resetPassword} className=' text-fuchsia-800 cursor-pointer font-mono font-bold text-xl'>Reset Password</span></p>
                        <div>
                            <div className="flex items-center justify-between my-4">
                                <div className="w-[45%] h-[1px] bg-black opacity-20"></div>
                                <p>or</p>
                                <div className="w-[45%] h-[1px] bg-black opacity-20"></div>
                            </div>
                            <div onClick={() => signInWithGoogle()} className=" cursor-pointer flex items-center justify-center w-11/12 md:w-7/12 mx-auto bg-slate-50 rounded-lg shadow-md mb-5" >
                                <img className='w-[45px] mr-2' src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" />
                                <h3 className=' font-semibold'>Continue With Google</h3>
                            </div>
                            <div onClick={() => signInWithGithub()} className=" cursor-pointer flex items-center justify-center w-11/12 md:w-7/12 mx-auto bg-slate-50 rounded-lg shadow-md mb-5"  >
                                <img className='w-[45px] p-1 mr-2 text-white' src="https://pngimg.com/uploads/github/github_PNG87.png" alt="" />
                                <h3 className=' font-semibold'>Continue With GitHub</h3>
                            </div>
                        </div>
                        <ToastContainer />

                    </div>
                    <div className="circle md:h-[500px] md:w-[500px] h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-2  -z-10"></div>
                    <div className="circle md:h-[500px] md:w-[500px] h-[200px] w-[200px] rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-0 top-0  -z-10 opacity-60"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;