import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

function useProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get('https://secure-depths-99773.herokuapp.com/product');
            if (!data?.success) return toast.error(data.error)

            setProducts(data?.data);
        }
        fetchData()

    }, [products])


    if (!products) {
        return <Loading></Loading>
    }

    return [products, setProducts]

}
export default useProduct;