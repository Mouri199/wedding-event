import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Contributor/AuthContributor";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const { user, userSignOut } = useContext(AuthProvider);

    const handleSignOut = () => {
        userSignOut()
            .then(() => console.log("user logged out"))
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className="flex justify-evenly bg-purple-100 items-center">
                <div className="flex mt-5 mb-5  items-center">

                   
                        <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px]" src="https://i.ibb.co/YfTRxYV/logo.png" alt="" /></Link>
                    

                    <div className="md:hidden lg:hidden text-4xl" onClick={() => setOpen(!open)} >
                        {
                            open === true ? <AiOutlineMenuFold></AiOutlineMenuFold> : <AiOutlineMenuFold></AiOutlineMenuFold>
                        }

                    </div>

                    <nav>
                        <ul className={`lg:flex md:flex hidden lg:sticky mr-9 text-2xl font-semibold gap-7 ${open? "top-16 left-64" : "hidden"}`}>
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="hover:underline hover:text-purple-900">
                                <NavLink to="/about"> About</NavLink>
                            </li>
                            <li className="hover:underline hover:text-purple-900" >
                                <NavLink to="/services"> Services </NavLink> </li>

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

                    <nav>

                    </nav>

                </div>


                <div className="lg:block hidden">
                    <Link to="/signUp">
                        <p className="btn hover:bg-purple-800 bg-purple-900 text-white">Sign Up</p>
                    </Link>
                    <Link to="/signin">
                        <p className="btn ml-5 hover:bg-purple-800 bg-purple-900 text-white">Sign In</p>
                    </Link>
                </div>
                <div>
                    {
                        user && <span>{user.email}</span>
                    }
                   <div>
                   <button onClick={handleSignOut} className="btn lg:block hidden">Sign Out</button>
                   </div>
                </div>


            </div>



        </>
    );
};

export default Navbar;