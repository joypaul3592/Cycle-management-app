import React, { useEffect, useState } from 'react';
// import Title from '../../shared/Title/Title';
import { EyeIcon, EyeOffIcon, XIcon } from '@heroicons/react/outline'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {
    const location = useLocation()
    const naviget = useNavigate()
    const [password, setPassword] = useState(false)

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [signInWithGoogle, goolgeUser, googleLoading, googlEerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, Gituser, Gitloading, Giterror] = useSignInWithGithub(auth);

    // password check
    const [handel, setHandel] = useState('')
    const [handelError, setHandelError] = useState('')
    const passwordHandel = (event) => {
        const password = event.target.value
        if (password.length >= 6) {
            setHandel(event.target.value)
            setHandelError('')
        }
        else {
            setHandelError('6 Digit Password')
            setHandel('')
        }
    }



    // email input value & validation
    const [emailError, setEmailError] = useState('')
    const emailClick = (event) => {
        const EmailRegex = /\S+@\S+\.\S+/;
        const emailValue = EmailRegex.test(event.target.value);
        if (emailValue) {
            setEmailError('')
        } else {
            setEmailError('Please give the valid Email')
        }
    }


    const from = location.state?.from?.pathname || "/";


    // handel submit 
    const handelsubmit = async (event) => {
        event.preventDefault()
        const displayName = event.target.Names.value;
        const email = event.target.email.value;
        const password = handel;
        const photoURL = event.target.images.value;
        if (handel) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName, photoURL });
        }
        else {
            return;
        }
    }
    useEffect(() => {
        if (user) {
            naviget(from, { replace: true });
            toast.success('SignUp Successful!!')
            toast.success('Verification Code Sent to the Email!!')
        }
    }, [user])

    // User sign up error
    useEffect(() => {
        if (error?.code) {
            toast("Opp!! Allrady Have An Account")
        }
    }, [error])

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


    return (
        <div>
            {/* <Title title={Register}></Title> */}
            <div className='mb-24 mx-5 '>
                <div className="w-full lg:w-1/2 md:w-3/4 mx-auto bg-opacity-10 shadow-lg relative">
                    <div className=" p-5 mt-[8rem]   bg-opacity-60 backdrop-blur-lg rounded-lg ">
                        <h1 className='text-4xl font-semibold mb-5 font-mono'>Register</h1>
                        <form onSubmit={handelsubmit} className='text-black'>

                            <div className="flex flex-col text-left mb-8">
                                <label className=' text-xl ml-2 mb-2' htmlFor="Names">Name</label>
                                <input className='py-2 placeholder:text-base rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="text" id="Names" placeholder='Enter Your Name' required />
                            </div>



                            <div className="flex flex-col text-left mb-8">
                                <label className=' text-xl ml-2 mb-2' htmlFor="email">Email</label>
                                <input onChange={emailClick} className='py-2 rounded-lg shadow-md border-0 placeholder:text-base outline-0 px-4 text-xl' name="email" type="email" id="email" placeholder='Enter Your Email' required />
                            </div>
                            {
                                emailError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {emailError}</p> : ''
                            }

                            <div className="flex flex-col text-left mb-8">
                                <label className=' text-xl  ml-2 mb-2' htmlFor="password">Password</label>
                                <div className="relative">
                                    <input onChange={passwordHandel} className='w-full py-2 rounded-lg placeholder:text-base shadow-md border-0 outline-0 px-4 text-xl ' placeholder='Enter Your Password' type={password ? 'text' : 'password'} name="password" id="password" required />

                                    <div onClick={() => setPassword(!password)} className='w-6 absolute right-4 top-[25%]'>
                                        {
                                            password ? <EyeIcon ></EyeIcon> : <EyeOffIcon></EyeOffIcon>
                                        }

                                    </div>
                                </div>
                            </div>

                            {
                                handelError ? <p className='text-left mb-7 text-red-600 flex '><XIcon className='w-5 mr-2'></XIcon> {handelError}</p> : ''
                            }


                            <div className="flex flex-col text-left mb-8">
                                <label className=' text-xl ml-2 mb-2' htmlFor="images">Your Photo</label>
                                <input className='py-2 rounded-lg shadow-md placeholder:text-base border-0 outline-0 px-4 text-xl' type="url" name="images" id="images" placeholder='Enter Your Photo URL' required />
                            </div>




                            <div className='mb-2'>

                                <input type="submit" className='w-full bg-fuchsia-800 shadow-md py-2 text-2xl rounded text-white' value='Register' />
                            </div>
                            <p className=' font-mono font-medium mt-8'>Allrady have an account? <span onClick={() => navigate('/login')} className=' text-fuchsia-800 cursor-pointer font-mono font-bold text-xl '>Log In</span></p>
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

                        </form>
                    </div>
                    <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-2  -z-10"></div>
                    <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-0 top-0  -z-10 opacity-60"></div>
                </div>
                <ToastContainer />

            </div>

        </div>
    );
};

export default SignUp;
