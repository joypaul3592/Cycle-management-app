import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../img/logo.png'
import auth from '../../Firebase/Firebase.init'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    const location = useLocation()
    const [user] = useAuthState(auth)


    return (
        <Disclosure
            as="nav" className=" shadow-md sticky top-0 z-40 bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
                        <div className="relative flex items-center justify-between h-16 ">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between ">
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
                                <div className="hidden  sm:block sm:ml-6 ">
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
                                <div className="hidden  sm:block sm:ml-6 mr-2">
                                    <div className="flex items-center justify-center h-full">
                                        {
                                            user?.uid ? <NavLink
                                                to={'login'}
                                                onClick={() => { signOut(auth) }}
                                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}>LogOut</NavLink> :

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

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Home</NavLink>
                            <NavLink
                                to={'service'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Service</NavLink>
                            <NavLink
                                to={'blog'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >Blog</NavLink>
                            <NavLink
                                to={'about'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-purple-500' : 'text-black'}`)}
                            >About
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
                </>
            )
            }
        </Disclosure >

    );
};

export default Navbar;