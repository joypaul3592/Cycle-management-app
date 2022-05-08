import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../Firebase/Firebase.init";



const AddProduct = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = async (e) => {

        const token = localStorage.getItem('accessToken')
        console.log(token)
        e.preventDefault();

        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            quantity: e.target.pdQuantity.value,
            SPName: e.target.spName.value,
            details: e.target.pdDetails.value,
            token: token,
            email: user.email


        };
        console.log(product);
        try {
            const { data } = await axios.post(`https://secure-depths-99773.herokuapp.com/product`, product)

            if (!data.success) {
                return toast.error(data.error)
            }
            toast.success(data.message)
            e.target.reset()
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    };
    return (
        <div className="py-32 md:px-10 px-3 min-h-screen w-full ">
            <div className="w-full lg:w-1/2 md:w-3/4 mx-auto rounded-lg relative">
                <div className="  md:p-10 p-3  w-full  bg-opacity-90 backdrop-blur-lg shadow-lg ">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700">
                                Name :
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                className="flex-1 py-2 border-b-2 border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none" required
                            />
                        </div>



                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700 ">
                                Price :
                            </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Product Price"
                                className="flex-1 py-2 border-b-2 
                                bg-transparent border-green-600 focus:border-fuchsia-700 
                      text-black placeholder-black
                      outline-none" required
                            />
                        </div>


                        <div className="flex items-center mb-10">
                            <label
                                className="inline-block w-40 mr-6 text-right
                                    font-bold text-fuchsia-700"
                            >
                                Image :
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Product Image URL"
                                className="flex-1 py-2 border-b-2 bg-transparent border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none" required
                            />
                        </div>


                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700 ">
                                Quantity :
                            </label>
                            <input
                                type="text"
                                name="pdQuantity"
                                placeholder="Product Quentity"
                                className="flex-1 py-2 border-b-2 
                                bg-transparent border-green-600 focus:border-fuchsia-700 
                      text-black placeholder-black
                      outline-none" required
                            />
                        </div>

                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700">
                                Supplier Name :
                            </label>
                            <input
                                type="text"
                                name="spName"
                                placeholder="Supplier Name"
                                className="flex-1 py-2 border-b-2 bg-transparent 
                                border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none" required
                            />
                        </div>

                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700">
                                Product Details :
                            </label>
                            <textarea
                                type="text"
                                name="pdDetails"
                                placeholder="Add Your Product Details"
                                className="flex-1 py-2 border-b-2 bg-transparent 
                                border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none" required
                            />
                        </div>



                        <div className="text-right">
                            <button className="py-2 px-10 rounded-lg  bg-fuchsia-700 text-white font-bold">Add</button>
                        </div>
                    </form>
                </div>
                <div className="circle h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-0 bottom-0 md:animate-bounce -z-10"></div>
                <div className="circle h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute left-36 top-36 md:animate-bounce -z-10"></div>
                <div className="circle h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute let-0 bottom-0 md:animate-bounce -z-10"></div>
                <div className="circle h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-36 top-36 md:animate-bounce -z-10"></div>
            </div>
        </div>
    );
};

export default AddProduct;
