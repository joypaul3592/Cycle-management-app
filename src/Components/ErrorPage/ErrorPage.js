import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline'
import ErrorSVG from '../../img/Error.gif'
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
    const naviget = useNavigate();
    return (
        <div className='max-w-7xl mx-auto px-5 mt-12'>
            <button onClick={() => naviget(-1)} className='py-2 px-10  bg-fuchsia-800 text-white rounded font-xl font-semibold flex items-center justify-between'> <ArrowLeftIcon className='w-5 mr-4'></ArrowLeftIcon>Go Back</button>
            <img className=' mx-auto w-[60%]  ' src={ErrorSVG} alt="" />
        </div>
    );
};

export default ErrorPage;