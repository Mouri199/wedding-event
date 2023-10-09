
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Contributor/AuthContributor";
import { useContext } from "react";


const Navbar = () => {


    const { user, userSignOut } = useContext(AuthProvider);

    const handleSignOut = () => {
        userSignOut()
            .then(() => console.log("user logged out"))
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className=" bg-purple-100">
                <div className=" nav-start flex justify-evenly items-center">
                    <div className="dropdown flex items-center ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-56 z-[1] p-2 shadow bg-purple-300 text-center text-lg text-white rounded-box w-52">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="services">Services</NavLink>
                            <NavLink to="//gallery">Gallery</NavLink>
                            <NavLink to="blog">Blog</NavLink>
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </ul>
                        <div className="lg:hidden">
                            <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px] mx-4" src="https://i.ibb.co/YfTRxYV/logo.png" alt="" /></Link>
                        </div>
                    </div>









                    <div className="lg:flex  lg:justify-around hidden mx-8 items-center">


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
                        <div>
                            <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px] mx-4" src="https://i.ibb.co/YfTRxYV/logo.png" alt="" /></Link>
                        </div>
                        <nav>
                            <ul className={`lg:flex md:flex hidden lg:sticky mr-9 text-2xl font-semibold gap-7 ${open ? " " : "hidden"}`}>
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

                        {/* <div>
                        {user ? " " :
                            <div className="lg:flex">
                                <Link to="/signUp">
                                    <button className="lg:p-2 p-1 rounded-lg lg:mx-2 hover:bg-purple-800 bg-purple-900 text-white">Sign Up</button>
                                </Link>
                                <Link to="/signin">
                                    <button className="lg:p-2 lg:block hidden p-1 rounded-lg hover:bg-purple-800 bg-purple-900 text-white">Sign In</button>
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="lg:text-2xl font-medium">
                            {
                                user && <span>{user.displayName}</span>
                            }
                        </div>
                        <div>
                            {user ? <img className="rounded-full w-14" src={user.photoURL} alt="" ></img> : ""}
                        </div>



                        {user ? <button onClick={handleSignOut} className="btn bg-purple-900 text-white hover:bg-purple-800 lg:block hidden">Sign Out</button> : " "}

                    </div> */}

                    </div>

                    <div className="">
                        {user ? " " :
                            <div className="lg:flex ">
                                <Link to="/signUp">
                                    <button className="lg:p-2 p-1 rounded-lg lg:mx-2 hover:bg-purple-800 bg-purple-900 text-white">Sign Up</button>
                                </Link>
                                <Link to="/signin">
                                    <button className="lg:p-2 lg:block hidden p-1 rounded-lg hover:bg-purple-800 bg-purple-900 text-white">Sign In</button>
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="flex items-center lg:gap-5">
                        <div className="lg:text-2xl  hidden text-sm font-medium">
                            {
                                user && <span>{user.displayName}</span>
                            }
                        </div>
                        <div className="mr-2">
                            {user ? <img className="rounded-full w-10 lg:w-14" src={user.photoURL} alt="" ></img> : ""}
                        </div>



                        {user ? <button onClick={handleSignOut} className="lg:p-2 p-1 mr-2 text-sm rounded-lg bg-purple-900 text-white hover:bg-purple-800 lg:block ">Sign Out</button> : " "}

                    </div>
                </div>


                <div>

                </div>





            </div >



        </>
    );
};

export default Navbar;