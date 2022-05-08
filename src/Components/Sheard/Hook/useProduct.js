import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

    return [products, setProducts]
}
export default useProduct;