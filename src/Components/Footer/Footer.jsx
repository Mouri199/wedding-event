import { AiFillAccountBook, AiFillFacebook, AiFillInstagram, AiFillMail, AiFillPhone, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="mt-10 mb-20">
            <hr />
            <p className="text-4xl italic text-center lg:font-semibold lg:mt-5">Ready for a Ridiculously Fun Time at Your Event?</p>

            <div className="text-center mt-10 text-xl">
                <h4 className="font-satisfy text-5xl mb-2">Wedding Hawker</h4>
                <p>E-mail: info@gmail.com</p>
                <p>Call: +8809198289</p>
                
                <div className="flex justify-center gap-5">
                    <p><AiFillYoutube></AiFillYoutube> </p>
                    <p><AiFillTwitterSquare></AiFillTwitterSquare> </p>
                    <p><AiFillInstagram></AiFillInstagram> </p>
                    <p><AiFillFacebook></AiFillFacebook> </p>
                </div>
                <div className="flex justify-center gap-8 mt-10">
                    <button className="flex hover:bg-purple-400 bg-purple-900 text-white btn"> <AiFillMail></AiFillMail> E-mail Us</button>
                    <button className="flex hover:bg-purple-400 bg-purple-900 text-white btn"> <AiFillAccountBook></AiFillAccountBook> Book Now</button>
                    <button className="flex hover:bg-purple-400 bg-purple-900 text-white btn"> <AiFillPhone></AiFillPhone>  Call Us</button>
                </div>
            </div>

        </div>
    );
};

export default Footer;