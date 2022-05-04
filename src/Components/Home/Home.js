import React from 'react';
import bannarImg from '../../../src/img/cycle2.png'

const Home = () => {
    return (
        <div className='relative bg-slate-300 h-[85vh] overflow-hidden'>

            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-fuchsia-500 to-green-500 ... absolute left-0 top-0 ">
            </div>



            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-lime-500 to-teal-500 ... absolute left-56 top-0  animate-bounce ">
            </div>



            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-red-200 to-pink-500 ... absolute left-0 top-56 animate-bounce ">
            </div>

            <div className="circle h-[600px] w-[600px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-0 animate-bounce ">
            </div>


            <div className="w-full h-[80ch] mx-auto bg-gradient-to-br from-white absolute left-0 top-0 to-transparent bg-opacity-20 bg-white  text-2xl text-black backdrop-blur-lg ">
                <div className="container p-5 mt-20 max-w-7xl mx-auto flex items-center justify-between">
                    <div className="text-xontainer">
                        <h1 className=' text-6xl font-serif font-semibold text-fuchsia-900  leading-12'>"We're the best platform to manage a store"</h1>
                        <button className='mt-16 border-fuchsia-900 border-2 text-fuchsia-900 py-1 px-5 rounded  hover:bg-fuchsia-900 hover:text-white'>View More</button>
                    </div>
                    <img className='w-[700px]' src={bannarImg} alt="Bannar Image" />
                </div>
            </div>

        </div>


    );
};

export default Home;