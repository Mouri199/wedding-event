import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex  justify-evenly bg-purple-100 items-center">
                <div className="flex mt-5 mb-5 items-center">

                    <nav>
                        <ul className="lg:flex md:flex hidden lg:sticky mr-9 text-2xl font-semibold gap-7">
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/about"> About</NavLink>
                            </li>
                            <li className="hover:underline hover:text-purple-900" >
                                <NavLink to="/services"> Services </NavLink> </li>
                        </ul>
                    </nav>
                    <div >
                      <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px]" src="https://i.ibb.co/YfTRxYV/logo.png" alt="" /></Link> 
                    </div>
                    <nav>
                        <ul className="lg:flex hidden md:flex lg:sticky ml-9 text-2xl font-semibold gap-7">
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/contactus">Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>


                <div className="">
                    <Link to="/signUp">
                        <button className="btn hover:bg-purple-800 bg-purple-900 text-white">Sign Up</button>
                    </Link>
                    <Link to="/signin">
                        <button className="btn ml-5 hover:bg-purple-800 bg-purple-900 text-white">Sign In</button>
                    </Link>
                </div>


            </div>

           

        </>
    );
};

export default Navbar;