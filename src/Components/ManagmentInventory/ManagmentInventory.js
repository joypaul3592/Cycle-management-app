import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const ManagmentInventory = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({});
    const prevQuantity = product.quantity;


    // fetch product
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://secure-depths-99773.herokuapp.com/product/${id}`);
            setProduct(data?.data[0]);
        }
        fetchData()

    }, [product])


    // hnadel count
    const CountHandel = () => {
        const quantity = parseInt(prevQuantity) - 1;

        fetch(`https://secure-depths-99773.herokuapp.com/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Deliverd One Item')
                }
                console.log(data);
            });
    }


    // handel input Quantity
    const QuantityInputAdd = (event) => {
        event.preventDefault()

        const newQuantity = event.target.QuantityValue.value;
        if (!newQuantity) {
            return toast.error('Please Provied Quantity Value')
        }

        const quantity = parseInt(newQuantity) + parseInt(prevQuantity);

        fetch(`https://secure-depths-99773.herokuapp.com/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Quantity Added Successfully!')
                }
                console.log(data);
            });

        event.target.QuantityValue.value = '';
    };


    return (
        <div className='py-20'>
            <div className='bgStyles border-2 w-[330px] md:w-[400px] mx-auto p-5 text-xl text-black font-medium  rounded-2xl shadow-2xl'>
                <img className='w-fit mx-auto rounded-2xl mb-4' src={product.image} alt="" />
                <p className='text-2xl font-semibold font-mono text-fuchsia-700 mb-1'>{product.name}</p>
                <hr className=' border-fuchsia-800 w-1/2 mx-auto mb-5' />

                <div className='flex justify-between items-center mb-4 px-5'>
                    <p>Price: <span className=" text-fuchsia-800 font  font-semibold text-lg">${product.price}</span></p>
                    <p>quantity: <span className=" text-fuchsia-800 font  font-semibold text-lg">{prevQuantity}</span> </p>
                </div>
                <p className='mt-4 text-lg text-gray-700 text-left'>Supplyer Names : {product.SPName}</p>
                <p className=' text-gray-700 text-lg text-left'>Description : {product.details}</p>
                <button onClick={CountHandel} className=' mt-5 bg-fuchsia-800 text-white rounded px-3 py-1 mx-8 mb-4'>Delivered</button>

                <div>
                    <h1 className='mt-7 mb-2 text-xl font-mono text-fuchsia-800 font-semibold'>Restock Quantoity</h1>
                    <hr className=' border-fuchsia-800 w-3/4 mx-auto mb-5' />
                    <form className=' text-left' onSubmit={QuantityInputAdd}>
                        <label className=' text-left font-mono text-lg font-semibold ' htmlFor="QuantityValue">Add Quantity :</label>
                        <input className='text-black w-full outline-none border-fuchsia-800 border-2 rounded-lg mb-4 px-3 py-1 pb-2 mt-2 placeholder:text-base' id='QuantityValue' type="number" name='QuantityValue' placeholder='Add Product Quantity' />
                        <div className="text-center">
                            <input type='submit' value='Submit' className=' bg-green-800 text-white mx-8  rounded px-4 py-1 mb-4' />
                        </div>
                    </form>
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