import { Link } from "react-router-dom";
import logo from '../../../img/logo.png'
// import logo from '../../../img/logo.png'
const Footer = () => {

    return (
        <div className="pt-12 ">
            <footer id="footer" className="relative z-50 bg-gray-200 py-24 ">

                <div className=" flex flex-col justify-center items-center ">
                    <Link className="flex-shrink-0 flex items-center " to={'/'}>
                        <img
                            className="block h-9 w-auto"
                            src={logo}
                            alt="Workflow"
                        />
                        <h1 className='text-3xl font-bold font-mono text-black mx-4'>Get<span className=' text-purple-500'>Cycle</span></h1>
                    </Link>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-800">2022  GetCycle. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
