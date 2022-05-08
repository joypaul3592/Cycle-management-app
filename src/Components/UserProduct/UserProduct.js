import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const UserProduct = ({ pd }) => {
    // const Navigate = useNavigate();
    const [deletes, setDeletes] = useState(false)


    useEffect(() => {
        console.log('kaj hocce');
    }, [deletes])


    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Delete ${name} ?`)
        if (deleteItems) {


            fetch(`https://secure-depths-99773.herokuapp.com/product/${id}`, {
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
        <div className=' border-2 w-[330px] mx-auto p-5  text-white font-medium  rounded-2xl shadow-xl'>
            <img className='w-full px-8 py-2 mb-8 h-52 mx-auto  rounded-2xl shadow-xl' src={pd.image} alt="" />
            <p className='py-1 text-2xl text-center font-mono font-semibold text-fuchsia-800'>{pd.name}</p>
            <hr className='my-2 border-fuchsia-700' />
            <div className="flex justify-between">
                <p className='py-1 text-gray-700 text-left'>Price: <span className=" text-fuchsia-800 font  font-semibold text-lg">${pd.price}</span> </p>
                <p className='py-1 text-gray-700 text-left'>quantity : <span className=" text-fuchsia-800 font  font-semibold text-lg">${pd.quantity}</span></p>
            </div>
            <p className='mt-4 text-gray-700 text-left'>Supplyer Names : {pd.SPName}</p>
            <p className=' text-gray-700 text-left'>Description : {pd.details}</p>
            <div className='text-center py-1'>
                <div onClick={() => deleteItems(pd._id, pd.name)} className="  text-center my-3 cursor-pointer bg-pink-800 text-white py-1 px-3 rounded">
                    Delete
                </div>
            </div>
        </div>
    );
};
export default UserProduct;