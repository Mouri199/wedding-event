import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <div>
            <div className="mt-10 mb-20">
                <hr />
                <p className="text-3xl lg:text-4xl lg:block hidden italic text-center lg:font-semibold lg:mt-5">Ready for a Ridiculously Fun Time at Your Event?</p>

                <div className="text-center mt-10 lg:text-xl">
                    <h4 className="font-satisfy text-2xl lg:text-5xl mb-2">Wedding Hawker</h4>
                    <p>E-mail: info@gmail.com</p>
                    <p>Call: +8809198289</p>

                    <div className="flex justify-center gap-5">
                        <p><AiFillYoutube></AiFillYoutube> </p>
                        <p><AiFillTwitterSquare></AiFillTwitterSquare> </p>
                        <p><AiFillInstagram></AiFillInstagram> </p>
                        <p><AiFillFacebook></AiFillFacebook> </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;