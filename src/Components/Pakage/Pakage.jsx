import { Link } from "react-router-dom";


const Pakage = () => {
    return (
        <div>


            <div className="">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 lg:w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[800px] italic text-center w-[400px] my-5">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 lg:w-[500px]" />
            </div>

            <div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="lg:flex  items-end gap-10 mt-20 lg:ml-[300px] bg-purple-200 lg:w-[1020px]">
                    <img className=" rounded-t-full lg:ml-0 ml-16 w-[300px] h-[500px]" src="https://i.ibb.co/0MXthZ6/pakage.jpg" alt="" />

                    <div>
                        <p className="text-center text-2xl mt-5 lg:text-5xl font-semibold">Fair Pakage</p>
                        <p className="text-center text-3xl lg:text-3xl font-semibold mb-5">$70000</p>
                        <p className="font-roboto mb-5 ml-20 lg:ml-0 text-lg lg:text-2xl italic font-medium">

                            1.Main Buffet for 100 Portions <br />
                            2.Standard Decoration <br />
                            3.Photo & Video Shoot <br />
                            4.One Night Stay at Studio Suite <br />
                            5.One Night Stay at 3Bedroom Suite <br />
                            6.SPA for Bride to be</p>
                        <Link to="/contactus">
                            <button className="btn mb-5 lg:ml-0 ml-36 bg-purple-900 hover:bg-purple-800 text-white">Book Now</button>
                        </Link>
                    </div>
                    <img className="rounded-t-full lg:ml-0 ml-16 w-[300px] h-[500px]" src="https://i.ibb.co/F8VWnbw/Kamila-Oren-48.webp" alt="" />
                </div>
            </div>



            <div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="lg:flex items-end gap-10 mt-20 lg:ml-[600px] bg-purple-200 lg:w-[1020px]">
                    <img className=" rounded-t-full lg:ml-0 ml-16 w-[300px] h-[500px]" src="https://i.ibb.co/R4ZTPhc/pakage3.jpg" alt="" />

                    <div>
                        <p className="text-center text-2xl lg:text-5xl font-semibold">Gold Pakage</p>
                        <p className="text-center text-3xl lg:text-3xl font-semibold mb-5">$50000</p>
                        <p className="font-roboto mb-5 lg:ml-0 ml-20  text-lg lg:text-2xl italic font-medium">

                            1.Main Buffet for 80 Portions <br />
                            2.Standard Decoration <br />
                            3.Photo & Video Shoot <br />
                            4.One Night Stay at Studio Suite <br />
                            5.One Night Stay at 2  Bedroom Suite <br />
                            6.SPA for Bride to be</p>
                        <Link to="/contactus">    <button className="btn mb-5 lg:ml-0 ml-36 bg-purple-900 hover:bg-purple-900 text-white">Book Now</button></Link>
                    </div>
                    <img className="rounded-t-full w-[300px] lg:ml-0 ml-16 h-[500px]" src="https://i.ibb.co/7nrktmx/pakage4.webp" alt="" />
                </div>
            </div>


            <div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="lg:flex items-end gap-10 mt-20 lg:ml-[300px] bg-purple-200 lg:w-[1020px]">
                    <img className=" rounded-t-full w-[300px] lg:ml-0 ml-16 h-[500px]" src="https://i.ibb.co/tx2QntH/c1101-2.jpg" alt="" />

                    <div>
                        <p className="text-center text-3xl lg:text-5xl font-semibold">Silver Pakage</p>
                        <p className="text-center text-2xl lg:text-3xl font-semibold mb-5">$30000</p>
                        <p className=" font-roboto mb-5  lg:ml-0 ml-20  text-lg lg:text-2xl italic font-medium">

                            1.Main Buffet for 80 Portions <br />
                            2.Standard Decoration <br />
                            3.Photo & Video Shoot <br />
                            4.One Night Stay at Studio Suite <br />
                        </p>
                        <Link to="/contactus"> <button className="btn lg:ml-0 ml-36 mb-5 bg-purple-900 hover:bg-purple-800 text-white">Book Now</button></Link>
                    </div>
                    <img className="rounded-t-full lg:ml-0 ml-16  w-[300px] h-[500px]" src="https://i.ibb.co/sHWyGHB/002-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Pakage;