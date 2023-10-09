import { Link } from "react-router-dom";

const AnnaPaul = () => {
    return (
        <div >
            <div className="absolute mt-10">
                <img src="https://i.ibb.co/qp6Vs26/floating-image-09.png" alt="" />
            </div>
            <div className="relative lg:flex justify-evenly items-center mt-20">

                <img data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" src="https://i.ibb.co/cg10QPQ/home-03-image-03-1.png" alt="" />

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src="https://i.ibb.co/0V3xB2Z/image-leaves-01.png" alt="" />
                    <div className="lg:w-[500px] mx-5 py-5">
                        <p className="text-xl">Anna & Paul</p>
                        <h2 className="text-4xl font-lora">Our Story</h2>
                        <p>At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                    </div>
                    <Link to ="/galleryDetails"> 
                        <button className="ml-5 btn rounded-full bg-purple-900 hover:bg-purple-800 text-white">View Gallery</button></Link>
                </div>



            </div>
        </div>
    );
};

export default AnnaPaul;