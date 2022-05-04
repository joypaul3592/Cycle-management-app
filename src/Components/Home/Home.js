import React from 'react';
import bannarImg from '../../../src/img/BannaImg.png'

const Home = () => {
    return (
        <div className='relative bg-slate-300 h-[94vh] overflow-hidden'>

            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-fuchsia-500 to-green-500 ... absolute left-0 top-0 ">
            </div>



            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-lime-500 to-teal-500 ... absolute left-56 top-0 ">
            </div>



            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-red-200 to-pink-500 ... absolute left-0 top-56">
            </div>

            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-0">
            </div>


            <div className="w-full h-[80ch] mx-auto bg-gradient-to-br from-white absolute left-0 top-0 to-transparent bg-opacity-20 bg-white  text-2xl text-black backdrop-blur-lg ">
                <div className="container max-w-7xl mx-auto flex items-center justify-between">
                    <div className="text-xontainer">
                        <h1 className=' text-6xl font-mono font-bold'>Headding Text</h1>
                        <h1 className=' text-3xl font-mono font-bold '>of this website</h1>
                    </div>
                    <img className='w-[700px]' src={bannarImg} alt="Bannar Image" />
                </div>
            </div>

        </div>


    );
};

export default Home;