import React from 'react';
// import { useNavigate } from 'react-router-dom';

const UserProduct = ({ pd }) => {
    // const Navigate = useNavigate();


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
                {/* <button className={`${children ? 'bg-[#FF0066] text-white rounded px-3 py-1' : ''}`}>{children}</button> */}
            </div>
        </div>
    );
};
export default UserProduct;