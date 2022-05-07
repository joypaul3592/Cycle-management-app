import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProduct from '../Sheard/Hook/useProduct';

const ManageProduct = () => {


    const naviget = useNavigate()
    const [deletes, setDeletes] = useState(false)
    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/product');
            if (!data?.success) return toast.error(data.error)
            setProducts(data?.data);
        }
        fetchData()

    }, [products, deletes])






    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Delete ${name} ?`)
        if (deleteItems) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDeletes(true)
                        toast.success(`Successfully Delete ${name}`)
                    }
                })
        }
        else {
            return toast.error('Cancle By User')
        }

    }




    return (
        <div className='mb-20'>
            <div>
                <div className=' max-w-7xl mx-auto my-10'>
                    <div className='w-full '>
                        <div className="bg-gray-800 rounded-lg mx-5">
                            <div className='flex justify-between py-2 px-8'>
                                <div className='text-lg font font-mono font-semibold text-white'>
                                    Image
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white'>
                                    Name
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white'>
                                    Quantity
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white'>
                                    Edit
                                </div>
                                <div className='text-lg font font-mono font-semibold text-white'>
                                    Delete
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-12">
                            {
                                products.map(product =>
                                    <div key={product._id} >
                                        <div className="relative ">
                                            <div className=" bg-opacity-90 backdrop-blur-lg shadow-lg flex justify-between items-center mb-8 mx-5 px-8 py-2 rounded-lg  ">
                                                <div>
                                                    <img className='w-20' src={product.image} alt="" />
                                                </div>
                                                <h1 className=" text-xl font-mono ">{product.name}</h1>
                                                <h1 className="text-xl font-mono ">{product.quentity}</h1>
                                                <div onClick={() => (naviget(`/addItem`))} className=" cursor-pointer bg-green-800 text-white py-1 px-3 rounded">
                                                    Add New
                                                </div>
                                                <div onClick={() => deleteItems(product._id, product.name)} className=" cursor-pointer bg-red-800 text-white py-1 px-3 rounded">
                                                    Delete
                                                </div>
                                            </div>
                                            <div className="circle h-[20px] w-[95%] mx-auto rounded-full bg-gradient-to-r from-green-200 to-blue-200 ... absolute right-8 bottom-4 md:animate-bounce -z-10"></div>
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

{/* <div className="bg-slate-300 ">
                            {
                                products.map(product => <tr key={product._id} className="text-center bg-orange-500  ">
                                    <td className="hidden  md:block px-6 py-4 text-sm text-gray-500">
                                        {product._id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img className='w-20' src={product.image} alt="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {product.quentity}
                                    </td>
                                    <td className="px-6 py-4 hidden md:block">
                                        Edit
                                    </td>
                                    <td onClick={() => deleteItems(product._id)} className="px-6 py-4 cursor-pointer">
                                        Delete
                                    </td>
                                </tr>)
                            }
                        </div> */}