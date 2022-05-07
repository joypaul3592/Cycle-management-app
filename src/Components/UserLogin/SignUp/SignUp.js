// import React, { useEffect, useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import SocialLogin from '../SocialLogin/SocialLogin';
// import { EyeIcon, EyeOffIcon, XIcon } from '@heroicons/react/outline'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loading from '../../Sheard/Loading/Loading';
// import { updateProfile } from 'firebase/auth';
// import auth from '../../Firebase/Firebase.init';




// const SignUp = () => {

//     const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



//     const naviget = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [comfirmPass, setComfirmPass] = useState('');


//     // Error
//     const [emailError, setEmailError] = useState('');
//     const [passError, setPassError] = useState('');
//     const [comfirmPassError, setComfirmPassError] = useState('');
//     const [nameError, setNameError] = useState('');
//     const [photoError, setPhotoError] = useState('');
//     const [state, setState] = useState(false)
//     const [state2, setState2] = useState(false)




//     // email input value & validation
//     const emailClick = (e) => {
//         const EmailRegex = /\S+@\S+\.\S+/;
//         const emailValue = EmailRegex.test(e.target.value);
//         if (emailValue) {
//             setEmail(e.target.value);
//             setEmailError('')
//         } else {
//             setEmailError('Please give the valid Email')
//             setEmail('');
//         }
//     }


//     // Password input value
//     const passwordClick = (e) => {
//         const passwordValue = e.target.value;
//         if (passwordValue.length > 6) {
//             setPassword(passwordValue);
//             setPassError('')
//         } else {
//             setPassword('');
//             setPassError('Please Give Minimum 6 Chrecter')
//         }
//     }
//     // Comfirm Password input value
//     const comfirmPassClick = (e) => {
//         const comfirmPassValue = e.target.value;
//         if (comfirmPassValue === password) {
//             setComfirmPass(comfirmPassValue);
//             setComfirmPassError('')
//         } else {
//             setComfirmPass('');
//             setComfirmPassError('Password Dose Not Match')
//         }
//     }


//     const toggleBtn = () => {
//         setState(prevState => !prevState)
//     }

//     const toggleBtn2 = () => {
//         setState2(prevState => !prevState)
//     }


//     // Submit section
//     // const HanddleSignUp = async (event) => {
//     //     event.preventDefault()

//     //     const displayName = event.target.name.value;
//     //     const photoURL = event.target.photo.value;





//     //     if (email !== '' && password !== '' && comfirmPass !== '') {
//     //         setEmailError('')
//     //         setPassError('')
//     //         setComfirmPassError('')
//     //         setPhotoError('')
//     //         setNameError('')



//     //         await createUserWithEmailAndPassword(email, password)

//     //         await updateProfile({ displayName, photoURL });


//     //         console.log(displayName, photoURL);

//     //     } else {
//     //         setEmailError('Please Fill The Input')
//     //         setPassError('Please Give Me the Password')
//     //         setComfirmPassError('Please Give Me the comfirm Password')
//     //         setPhotoError('Enter Your Photo Url')
//     //         setNameError('Enter Your Name')
//     //     }



//     //     // const update = async () => {
//     //     //     await updateProfile({ displayName: displayName, photoURL: photoURL });
//     //     //     alert('update Profile')
//     //     // }
//     //     // update()
//     // }



//     const HanddleSignUp = async (event) => {
//         event.preventDefault()
//         const displayName = event.target.name.value;
//         const email = event.target.email.value;
//         const photoURL = event.target.photo.value;


//         if (email !== '' && password !== '' && comfirmPass !== '') {
//             await createUserWithEmailAndPassword(email, password);
//             await updateProfile({ displayName, photoURL });
//         }
//         else {
//             return;
//         }
//     }



//     // User successfully sign up

//     useEffect(() => {
//         if (user) {
//             naviget('/')
//             toast.success('Emile login Successfull')
//         }
//     }, [user])

//     // User sign up error
//     useEffect(() => {
//         if (error?.code) {
//             toast("Opps!! Please Check You Email & Pass")
//         }
//     }, [error])

//     console.log(user);

//     // For Loading
//     // if (loading) {
//     //     return <Loading></Loading>
//     // };


//     return (
//         <div className="login-container">
//             <form onSubmit={HanddleSignUp} className='mb-24 mx-5 '>
//                 <div className="w-full lg:w-1/2 md:w-3/4 mx-auto bg-opacity-10 shadow-lg relative">

//                     <div className=" p-5 mt-[8rem]   bg-opacity-60 backdrop-blur-lg rounded-lg ">
//                         <h1 className='text-4xl font-semibold mb-5 font-mono'>Register</h1>
//                         <div className="h-[1px] w-full bg-black opacity-20 mb-10"></div>

//                         <div className="flex flex-col text-left mb-8">
//                             <label className=' text-xl ml-2 mb-2' htmlFor="name">Name</label>
//                             <input
//                                 className='py-2 placeholder:text-base rounded-lg shadow-md border-0 outline-0 px-4 text-xl' type="text" name="name" id="name" placeholder='Enter Your Name' required />
//                         </div>
//                         {
//                             nameError ? <p className='text-left mb-7 text-red-600 flex '><XIcon className='w-5 mr-2'></XIcon> {nameError}</p> : ''
//                         }

//                         <div className="flex flex-col text-left mb-8">
//                             <label className=' text-xl ml-2 mb-2' htmlFor="email">Email</label>
//                             <input onChange={emailClick} className='py-2 rounded-lg shadow-md border-0 placeholder:text-base outline-0 px-4 text-xl' type="email" name="email" id="email" placeholder='Enter Your Email' required />
//                         </div>
//                         {
//                             emailError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {emailError}</p> : ''
//                         }

//                         <div className="flex flex-col text-left mb-8">
//                             <label className=' text-xl  ml-2 mb-2' htmlFor="password">Password</label>
//                             <div className="relative">
//                                 <input onChange={passwordClick} className='w-full py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl ' type={state ? 'text' : 'password'} name="password" id="password" required />

//                                 <div onClick={toggleBtn} className='w-6 absolute right-4 top-[25%]'>
//                                     {
//                                         state ? <EyeIcon ></EyeIcon> : <EyeOffIcon></EyeOffIcon>
//                                     }

//                                 </div>
//                             </div>
//                         </div>
//                         {
//                             passError ? <p className='text-left mb-7 text-red-600 flex '><XIcon className='w-5 mr-2'></XIcon> {passError}</p> : ''
//                         }


//                         <div className="flex flex-col text-left mb-8">
//                             <label className=' text-xl  ml-2 mb-2' htmlFor="password">Comfirm Password</label>
//                             <div className="relative">
//                                 <input onChange={comfirmPassClick} className='w-full py-2 rounded-lg shadow-md border-0 outline-0 px-4 text-xl ' type={state2 ? 'text' : 'password'} name="password" id="password" required />

//                                 <div onClick={toggleBtn2} className='w-6 absolute right-4 top-[25%]'>
//                                     {
//                                         state2 ? <EyeIcon ></EyeIcon> : <EyeOffIcon></EyeOffIcon>
//                                     }

//                                 </div>
//                             </div>
//                         </div>
//                         {
//                             comfirmPassError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {comfirmPassError}</p> : ''
//                         }


//                         <div className="flex flex-col text-left mb-8">
//                             <label className=' text-xl ml-2 mb-2' htmlFor="photo">Your Photo</label>
//                             <input
//                                 className='py-2 rounded-lg shadow-md placeholder:text-base border-0 outline-0 px-4 text-xl' type="url" name="photo" id="photo" placeholder='Enter Your Photo URL' required />
//                         </div>
//                         {
//                             photoError ? <p className='text-left mb-7 text-red-600 flex'><XIcon className='w-5 mr-2'></XIcon> {photoError}</p> : ''
//                         }




//                         <div className="btn-container mt-10 mb-3">
//                             {/* <input onClick={HanddleSignUp} '>Register /> */}
//                             <input type="submit" className='w-full bg-fuchsia-800 shadow-md py-2 text-2xl rounded text-white' value='Register' />
//                         </div>
//                         <p className=' font-mono font-medium'>Allrady have an account? <span onClick={() => naviget('/login')} className=' text-fuchsia-800 cursor-pointer font-mono font-bold text-xl'>Log In</span></p>
//                         <SocialLogin></SocialLogin>
//                     </div>
//                     <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-2  -z-10"></div>
//                     <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-0 top-0  -z-10 opacity-60"></div>
//                 </div>
//             </form>
//         </div>
//     )
// };


// export default SignUp;






















import React, { useEffect, useState } from 'react';
// import Title from '../../shared/Title/Title';
import { EyeIcon, EyeOffIcon, XIcon } from '@heroicons/react/outline'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [password, setPassword] = useState(false)

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();


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
            navigate('/')
            toast.success('SignUp Successful!!')
        }
    }, [user])

    // User sign up error
    useEffect(() => {
        if (error?.code) {
            toast("Opp!! Allrady Have An Account")
        }
    }, [error])




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
                            <SocialLogin></SocialLogin>

                        </form>
                    </div>
                    <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-2  -z-10"></div>
                    <div className="circle h-[500px] w-[500px] rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-0 top-0  -z-10 opacity-60"></div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;
