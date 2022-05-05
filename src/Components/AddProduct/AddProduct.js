import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
        };

        try {
            const { data } = await axios.post(`http://localhost:5000/products`, product)

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
        <div className="py-32 px-10 min-h-screen w-full ">
            <div className="w-full lg:w-1/2 md:w-3/4 mx-auto rounded-lg relative">
                <div className="  p-10 w-full  bg-opacity-90 backdrop-blur-lg shadow-lg ">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700">
                                Product Name :
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="flex-1 py-2 border-b-2 border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none"
                            />
                        </div>



                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700 ">
                                Price :
                            </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="price"
                                className="flex-1 py-2 border-b-2 
                                bg-transparent border-green-600 focus:border-fuchsia-700 
                      text-black placeholder-black
                      outline-none"
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
                                placeholder="url"
                                className="flex-1 py-2 border-b-2 bg-transparent border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none"
                            />
                        </div>

                        <div className="flex items-center mb-10">
                            <label className="inline-block w-40 mr-6 text-right font-bold text-fuchsia-700">
                                Product Details :
                            </label>
                            <textarea
                                type="text"
                                name="name"
                                placeholder="Add Your Product Details"
                                className="flex-1 py-2 border-b-2 bg-transparent 
                                border-green-600 focus:border-fuchsia-700 
                                text-black placeholder-black
                      outline-none"
                            />
                        </div>



                        <div className="text-right">
                            <button className="py-2 px-10 rounded-lg  bg-fuchsia-400 text-white font-bold">Add</button>
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
