import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from 'firebase/auth';
import { Fragment, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import logo from '../../../img/logo.png'
import auth from '../../Firebase/Firebase.init'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    const location = useLocation()

    const [user] = useAuthState(auth)
    const [userUrl, setUserUrl] = useState('')
    useEffect(() => {
        if (user) {
            setUserUrl(user.photoURL)
        }
    }, [user, userUrl])



    return (
        <Disclosure
            as="nav" className=" shadow-md sticky top-0 z-40 bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
                        <div className="relative flex items-center justify-between h-16 ">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden ">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center lg:justify-between justify-center lg:items-stretch   ">
                                <div>
                                    <Link className="flex-shrink-0 flex items-center " to={'/'}>
                                        <img
                                            className="block h-9 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                        <h1 className='text-3xl font-bold font-mono text-black mx-4'>Get<span className=' text-purple-500'>Cycle</span></h1>
                                    </Link>
                                </div>
                                <div className="hidden  lg:block sm:ml-6 ">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to={'/'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Home</NavLink>
                                        <NavLink
                                            to={'manageItem'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Manage Items</NavLink>
                                        <NavLink
                                            to={'addItem'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Add Items</NavLink>
                                        <NavLink
                                            to={'myItem'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >My Items
                                        </NavLink>
                                        <NavLink
                                            to={'blog'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                        >Blog
                                        </NavLink>

                                    </div>
                                </div>
                                <div className="  lg:static absolute right-0 sm:ml-6 mr-2">
                                    <div className="flex items-center justify-center h-full">
                                        {
                                            user?.uid ?

                                                <Menu as="div" className="ml-3 relative">
                                                    <div>
                                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                            <span className="sr-only">Open user menu</span>
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={user ? userUrl : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                                                alt=""
                                                            />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-5 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <NavLink
                                                                to={'/myItem'}
                                                                className={({ isActive }) => (`block mb-3  text-base font-semibold ${isActive ? 'text-blue-500' : 'text-black'}`)}>Your Items</NavLink>

                                                            <NavLink
                                                                to={'login'}
                                                                onClick={() => { signOut(auth) }}
                                                                className={({ isActive }) => (`block mt3  text-base font-semibold ${isActive ? 'text-blue-500' : 'text-black'}`)}>
                                                                LogOut
                                                            </NavLink>

                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>




                                                :

                                                location.pathname.includes('/signup') ? <NavLink
                                                    to={'signup'}
                                                    className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                                >SignUp</NavLink> : <NavLink
                                                    to={'login'}
                                                    className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                                >Login</NavLink>
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden ">
                        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Home</NavLink>
                            <NavLink
                                to={'manageItem'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Manage Items</NavLink>
                            <NavLink
                                to={'addItem'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Add Items</NavLink>
                            <NavLink
                                to={'myItem'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >My Items
                            </NavLink>
                            <NavLink
                                to={'blog'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Blog
                            </NavLink>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <div className="flex items-center justify-center h-full">
                                {
                                    user?.uid ? <NavLink
                                        to={'login'}
                                        onClick={() => { signOut(auth) }}
                                        className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}>LogOut</NavLink> :

                                        location.pathname.includes('/signup') ? <NavLink
                                            to={'signup'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                        >SignUp</NavLink> : <NavLink
                                            to={'login'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                        >Login</NavLink>
                                }
                            </div>
                        </div>
                    </Disclosure.Panel>
                    <ToastContainer />
                </>
            )
            }
        </Disclosure >


    );
};

export default Navbar;