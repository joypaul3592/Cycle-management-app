import React from 'react';
import cycle1 from '../../img/cycle1.png'
import cycle2 from '../../img/cycle3.png'




const NewCycle = () => {
    return (
        <div>
            <h1 className='text-5xl font-mono text-fuchsia-800'>Upcomming Cycle !</h1>
            <div className=' max-w-7xl  mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 '>

                <main class="w-full mx-auto my-16 relative px-3">
                    <section class="flex flex-col md:flex-row gap-10 py-10 px-4 mx-auto lg:mx-0 rounded-md shadow-xl w-full md:max-w-2xl bg-white bg-opacity-60 backdrop-blur-md">
                        <div class="text-indigo-800 w-full md:w-[50%] flex flex-col justify-between">
                            <img className='w-[300px] h-[200px] ' src={cycle1} alt="" />
                        </div>
                        <div class="text-indigo-500 w-full md:w-[50%]">
                            <h3 class="uppercase text-black text-2xl font-medium">Leo Cycle</h3>
                            <h3 class="text-2xl font-semibold mb-7">$599</h3>
                            <div className=" text-justify">
                                <small class="text-black ">Most beautiful product it is, high speed, high technology and best comfort. </small>
                            </div>
                            <div className='my-3 text-left font-mono text-gray-900 font-semibold'>
                                <h1>Quentity : 99</h1>
                                <h1>Suppliyer Name : Imran Khan</h1>
                            </div>
                            <div className='mt-5 text-right'>
                                <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-2 rounded-sm">Update</button>
                            </div>
                        </div>
                    </section>
                    <div className="circle h-[200px] w-[200px] md:bg-none rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute left-10 bottom-12 md:animate-pulse -z-10"></div>

                    <div className="circle h-[200px] w-[200px] md:bg-none  rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-20 bottom-12 md:animate-pulse delay-1000 -z-10"></div>
                </main>

                <main class="w-full mx-auto my-16 relative px-3">
                    <section class="flex flex-col md:flex-row gap-10 py-10 px-4 mx-auto lg:mx-0  rounded-md shadow-xl w-full md:max-w-2xl bg-white bg-opacity-60 backdrop-blur-md">
                        <div class="text-indigo-800 w-full md:w-[50%] flex flex-col justify-between">
                            <img className='w-[300px] h-[200px] ' src={cycle2} alt="" />
                        </div>
                        <div class="text-indigo-500 w-full md:w-[50%]">
                            <h3 class="uppercase text-black text-2xl font-medium">Best Cycle</h3>
                            <h3 class="text-2xl font-semibold mb-7">$699</h3>
                            <div className=" text-justify">
                                <small class="text-black ">Most beautiful product it is, high speed, high technology and best comfort. </small>
                            </div>
                            <div className='my-3 text-left font-mono text-gray-900 font-semibold'>
                                <h1>Quentity : 199</h1>
                                <h1>Suppliyer Name : Arif Khan</h1>
                            </div>
                            <div className='mt-5 text-right'>
                                <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-2 rounded-sm">Update</button>
                            </div>
                        </div>
                    </section>
                    <div className="circle h-[200px] w-[200px] md:bg-none rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute left-10 bottom-12 md:animate-pulse -z-10"></div>

                    <div className="circle h-[200px] w-[200px] md:bg-none rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-20 bottom-12 md:animate-pulse delay-1000 -z-10"></div>
                </main>

            </div>
        </div>
    );
};

export default NewCycle;






