import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
    const naviget = useNavigate()

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, Gituser, Gitloading, Giterror] = useSignInWithGithub(auth);



    useEffect(() => {
        if (error || Giterror) {
            toast("Opps!! User Not Found")
        }
    }, [error, Giterror])



    useEffect(() => {
        if (user || Gituser) {
            naviget('/')
            toast.success('Social login Successfull')
        }
    }, [user, Gituser])







    return (
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
    );
};

export default SocialLogin;