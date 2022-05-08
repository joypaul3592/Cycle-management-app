import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const ManagmentInventory = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({});
    const [ref, setRef] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/product/${id}`);
            setProduct(data?.data[0]);
        }
        fetchData()

    }, [product, ref])





    // count
    const [count, setCount] = useState(0)
    const CountHandel = () => {
        setCount(count + 1)
    }
    const [quantity, setQuantity] = useState(0)



    const handelvalue = (e) => {
        const value = e.target.value;
        if (value == '') {
            return toast.error('You Dont Add Any Quantity')
        }
        setQuantity(value)
    }


    const QuantityInputAdd = (event) => {
        event.preventDefault()

        // console.log(quantity);

        fetch(`http://localhost:5000/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setRef(true)
                }
                console.log(data);
            });

    };
    return (
        <div className='py-20'>
            <div className='bgStyles border-2 w-[330px] md:w-[400px] mx-auto p-5 text-xl text-black font-medium  rounded-2xl shadow-2xl'>
                <img className='w-fit mx-auto rounded-2xl mb-4' src={product.image} alt="" />
                <p className='text-2xl font-semibold font-mono text-fuchsia-700 mb-2'>{product.name}</p>
                <hr className=' border-fuchsia-800 w-1/2 mx-auto mb-5' />

                <div className='flex justify-between items-center mb-4 px-5'>
                    <p>Price: <span className=" text-fuchsia-800 font  font-semibold text-lg">${product.price}</span></p>
                    <p>quantity: <span className=" text-fuchsia-800 font  font-semibold text-lg"> {product.quantity > 0 ? product.quantity - count : 0}</span> </p>
                    {/* <p>quantity:{product.quantity > 0 ? product.quantity - count : 0}</p> */}
                </div>
                <p className='mt-4 text-lg text-gray-700 text-left'>Supplyer Names : {product.SPName}</p>
                <p className=' text-gray-700 text-lg text-left'>Description : {product.details}</p>
                <div className='mt-8' >
                    <input onChange={handelvalue} className='text-black outline-none border-fuchsia-800 border-2 rounded-lg mb-4 px-3 py-1 pb-1  placeholder:text-base' type="number" name='QuantityValue' placeholder='Add New Quantity' />
                </div>
                <div>
                    <button onClick={QuantityInputAdd} className=' bg-green-800 text-white mx-8  rounded px-3 py-1 mb-4'>submit</button>
                    <button onClick={CountHandel} className=' bg-fuchsia-800 text-white rounded px-3 py-1 mx-8 mb-4'>Delivered</button>
                </div>
            </div>

            <div className='md:w-[400px] w-1/2 mx-auto my-20 text-center'>
                <Link to='/manageItem' className=' text-center  flex justify-center mt-2 items-center md:px-8 px-2 py-1 rounded-xl shadow-lg bg-fuchsia-800 text-white  font-semibold font-mono'>
                    <span className='text-xl  mr-3'>Manages Items</span>

                </Link>
            </div>
        </div>
    );
};

export default ManagmentInventory;