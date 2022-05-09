import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useProduct from '../Sheard/Hook/useProduct';
import Loading from '../Sheard/Loading/Loading';


const Products = () => {


    const [products, setProducts] = useProduct();
    const navigate = useNavigate();


    useEffect(() => {
        if (!products) {
            return <Loading></Loading>
        }

    }, [products])




    return (
        <div className='my-8'>
            <h1 className='text-5xl font-mono text-fuchsia-800'>Inventory</h1>
            <div className=' max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 '>
                {
                    products.slice(0, 6).map(product =>

                        <div key={product._id}>
                            <main class="w-full mx-auto my-16 relative px-3">
                                <section class="flex flex-col md:flex-row gap-10 py-10 px-4 mx-auto lg:mx-0  rounded-md shadow-lg w-full md:max-w-2xl bg-white bg-opacity-60 backdrop-blur-md">
                                    <div class="text-indigo-800 w-full md:w-[50%] flex flex-col justify-between">
                                        <img className='w-[300px] h-[200px] ' src={product.image} alt="" />
                                    </div>
                                    <div class="text-indigo-500 w-full md:w-[50%]">
                                        <h3 class="uppercase text-black text-2xl font-medium">{product.name}</h3>
                                        <h3 class="text-2xl font-semibold mb-7">${product.price}</h3>
                                        <div className=" text-justify">
                                            <small class="text-black ">{product.details}</small>
                                        </div>
                                        <div className='my-3 text-left font-mono text-gray-900 font-semibold'>
                                            <h1>Quentity : {product.quantity}</h1>
                                            <h1>Suppliyer Name :{product.SPName}</h1>
                                        </div>
                                        <div className='mt-5 text-right'>
                                            <button onClick={() => navigate(`/managmentInventory/${product._id}`)} id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-2 rounded-sm">Update</button>
                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>

                    )
                }

            </div>
            <div className='w-[300px] mx-auto mb-28'>
                <Link to='/manageItem' className='  flex justify-center mt-2 items-center px-8 py-1 rounded-xl shadow-lg bg-fuchsia-800 text-white  font-semibold font-mono'>
                    <span className='text-xl  mr-3'>Manages Items</span>
                </Link>
            </div>
        </div>
    );
};

export default Products;