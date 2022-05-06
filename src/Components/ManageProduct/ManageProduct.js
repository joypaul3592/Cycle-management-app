import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProduct = () => {



    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/product');
            if (!data?.success) return toast.error(data.error)
            setProducts(data?.data);
        }
        fetchData()

    }, [products])







    return (
        <div>
            <h1>This is Manage Product Page</h1>
            <div className=' max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 px-5'>
                {
                    products.map(product =>


                        <main key={product._id} class=" mx-auto my-16 relative">
                            <section class="flex flex-col md:flex-row gap-10 py-10 px-4 rounded-md shadow-lg w-full md:max-w-2xl bg-white bg-opacity-60 backdrop-blur-md">
                                <div class="text-indigo-500 flex flex-col justify-between">
                                    <img className='w-[300px] h-[200px] ' src={product.image} alt="" />
                                </div>
                                <div class="text-indigo-500">
                                    <h3 class="uppercase text-black text-2xl font-medium">{product.name}</h3>
                                    <h3 class="text-2xl font-semibold mb-7">${product.price}</h3>
                                    <div className=" text-justify">
                                        <small class="text-black ">{product.details}</small>
                                    </div>
                                    <div className='mt-5 text-right'>
                                        <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-2 rounded-sm">Update</button>

                                    </div>
                                </div>
                            </section>
                            <div className="circle h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute left-10 bottom-12 md:animate-pulse -z-10"></div>

                            <div className="circle h-[200px] w-[200px] rounded-full bg-gradient-to-r from-red-200 to-pink-300 ... absolute left-20 bottom-12 md:animate-pulse delay-1000 -z-10"></div>
                        </main>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;