import React, { useState } from "react";
import { toast } from "react-toastify";

function Contact() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [country, setCountry] = useState('')
    const [message, setMessage] = useState('')





    const handelcontact = () => {
        if (name !== '' || email !== '' || companyName !== '' || country !== '' || message !== '') {
            toast.success('Thanks For Message!')
        }
        else (toast.error('Please Fill The Box!'))

    }








    return (
        <div className=" max-w-7xl mx-auto px-5 relative">
            <div className="w-full flex items-center justify-center my-12 ">
                <div className=" w-full bg-white backdrop-blur-lg bg-opacity-20 shadow-lg rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Cntact Us!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-1/2 flex flex-col ">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input onChange={(e) => setName(e.target.value)} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" required />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input onChange={(e) => setEmail(e.target.value)} tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" required />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8 w-full">
                        <div className="md:w-1/2 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input onChange={(e) => setCompanyName(e.target.value)} tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" required />
                        </div>
                        <div className="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <input onChange={(e) => setCountry(e.target.value)} tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" required />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} required />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button onClick={handelcontact} className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
            <div className="circle lg:h-[400px] lg:w-[400px] md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full bg-gradient-to-r from-green-200 to-blue-300 ... absolute right-8 bottom-0 md:animate-bounce -z-10"></div>
            <div className="circle lg:h-[400px] lg:w-[400px] md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full bg-gradient-to-r from-blue-300  to-green-200 ... absolute left-8 bottom-20 md:animate-bounce -z-10"></div>
        </div>
    );
}

export default Contact;
