import React from 'react';
import cycleImage1 from '../../img/cycle1.png'
import cycleImage3 from '../../img/cycle3.png'
import cycleImage4 from '../../img/cycle4.png'



const Products = () => {




    return (


        <div className="my-16">

            <div className=" text-6xl font-semibold font-mono text-fuchsia-900">
                <h1>Product</h1>
            </div>

            <div className=' max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1'>
                <main class="grid place-items-center   mx-5 my-16 bg-gradient-to-r from-pink-400  rounded-l-lg ">
                    <section class="flex flex-col md:flex-row gap-10 py-10 px-4 rounded-md shadow-lg w-full md:max-w-2xl bg-white bg-opacity-60 backdrop-blur-md">
                        <div class="text-indigo-500 flex flex-col justify-between">
                            <img className='w-[800px] h-[200px] mt-[25%] ' src={cycleImage1} alt="" />
                        </div>
                        <div class="text-indigo-500">
                            <h3 class="uppercase text-black text-2xl font-medium">Canyon BiCycle</h3>
                            <h3 class="text-2xl font-semibold mb-7">$150</h3>
                            <div className=" text-justify">
                                <small class="text-black ">Factory Full suspension Aluminum mountainbike 21 speed men Cycling 27.5 inch Mountain adults Bicycle 26 MTB Gear Cycle bike</small>
                            </div>
                            <div className='mt-5 text-right'>
                                <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-2 rounded-sm">Update</button>

                            </div>
                        </div>
                    </section>
                </main>

                <main class="grid place-items-center   mx-5 my-16 bg-gradient-to-r from-blue-400 rounded-l-lg ">
                    <section class="flex flex-col md:flex-row gap-10 py-10 px-4 rounded-md shadow-lg w-full md:max-w-2xl bg-white bg-opacity-60 backdrop-blur-md">
                        <div class="text-indigo-500 flex flex-col justify-between">
                            <img className='w-[800px] h-[200px]  mt-[25%] ' src={cycleImage4} alt="" />
                        </div>
                        <div class="text-indigo-500">
                            <h3 class="uppercase text-black text-2xl font-medium">Speeds BiCycle</h3>
                            <h3 class="text-2xl font-semibold mb-7">$230</h3>
                            <div className=" text-justify">
                                <small class="text-black ">Factory Full suspension Aluminum mountainbike 21 speed men Cycling 27.5 inch Mountain adults Bicycle 26 MTB Gear Cycle bike</small>
                            </div>
                            <div className='mt-5 text-right'>
                                <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-2 rounded-sm">Update</button>

                            </div>
                        </div>
                    </section>
                </main>



            </div>
        </div>

    );
};

export default Products;