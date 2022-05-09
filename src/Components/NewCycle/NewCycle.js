import React from 'react';
import cycle1 from '../../img/cycle1.png'
import cycle2 from '../../img/cycle3.png'




const NewCycle = () => {
    return (
        <div>
            <h1 className='lg:text-5xl md:text-4xl text-2xl font-mono text-fuchsia-800'>upcoming Cycle</h1>
            <hr className=' border-fuchsia-800 w-1/2 mx-auto mt-5' />
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
                        </div>
                    </section>
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
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default NewCycle;






