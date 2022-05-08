import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import UserProduct from '../UserProduct/UserProduct';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {



        const getProducts = async () => {
            const email = user.email;
            const url = `https://secure-depths-99773.herokuapp.com/product?email=${email}`
            const { data } = await axios.get(url);
            if (!data?.success) {
                toast.error(data.error);
                return
            }
            setProducts(data.data)
        }
        getProducts()

    }, [user])


    return (
        <div>
            <h1 className='text-center text-4xl font-mono text-fuchsia-800 font-bold mt-20'>My Product</h1>
            <hr className=' border-fuchsia-800 mb-20 mt-3 w-1/2 mx-auto' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:px-20 mb-10 max-w-7xl mx-auto'>
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


