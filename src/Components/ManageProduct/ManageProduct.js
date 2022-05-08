import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProduct = () => {


    const naviget = useNavigate()
    const [deletes, setDeletes] = useState(false)
    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get('https://secure-depths-99773.herokuapp.com/product');
            if (!data?.success) return toast.error(data.error)
            setProducts(data?.data);
        }
        fetchData()

    }, [products, deletes])










    return (
        <div className='mb-20'>
            <div>
                <div className=' max-w-7xl mx-auto my-10'>
                    <div className='w-full '>
                        <div className="bg-gray-800 rounded-lg mx-5 md:static fixed left-0 top-[25%]">
                            <div className='block md:flex justify-between py-2 md:px-8 px-4'>
                                <div className='text-lg font font-mono font-semibold text-white my-8 md:my-0'>
                                    Image
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white my-8 md:my-0'>
                                    Name
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white my-8 md:my-0'>
                                    price
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white my-8 md:my-0'>
                                    Quantity
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white my-8 md:my-0'>
                                    Add Item
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-12">
                            {
                                products.map(product =>
                                    <div key={product._id} >
                                        <div className="md:relative md:block flex justify-center md:mr-12 md:ml-12  lg:mr-5 lg:ml-5 ml-24 ">
                                            <div className=" p-3 md:p-0 bg-opacity-90 backdrop-blur-lg shadow-lg block md:flex md:justify-between items-center mb-8 md:mx-5 md:px-8 px-3 lg:mx-0  py-2 rounded-lg  w-full justify-end text-right mx-16 ">
                                                <div>
                                                    <img className='w-20' src={product.image} alt="" />
                                                </div>
                                                <h1 className=" text-xl font-mono ">{product.name}</h1>
                                                <h1 className="text-xl font-mono ">{product.price}</h1>
                                                <h1 className="text-xl font-mono ">{product.quantity}</h1>
                                                <div onClick={() => (naviget(`/addItem`))} className=" text-center my-3 cursor-pointer  bg-fuchsia-800 text-white py-1 md:px-3 px-1 rounded">
                                                    Add New
                                                </div>

                                            </div>
                                            <div className="circle md:h-[40px] md:w-[95%] mx-auto rounded-full md:bg-gradient-to-r md:from-green-200 to-blue-200 ... md:absolute lg:right-6 bottom-4 right-0 md:animate-bounce -z-10"></div>
                                        </div>
                                    </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;

