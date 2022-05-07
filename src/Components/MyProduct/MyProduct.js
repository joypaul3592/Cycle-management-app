import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import UserProduct from '../UserProduct/UserProduct';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    // const [data] = UserFetch(http://localhost:5000/items?email=${email});

    const [products, setProducts] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/product');
            setProducts(data.data)
        }
        fetchData()

    }, [products])


    return (
        <div>
            <h1 className='text-center text-4xl font-serif font-bold my-20'>My Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:px-20 mb-10'>
                {
                    products.map(pd => <UserProduct
                        key={pd._id}
                        pd={pd}
                    ></UserProduct>)
                }
            </div>
        </div>
    );
};

export default MyProduct;



















// import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import Title from '../../shared/Title/Title';
// import UserFetch from '../../shared/UserFetch/UserFetch';
// import UserProduct from '../../shared/userProduct/UserProduct';


// export default MyProduct;