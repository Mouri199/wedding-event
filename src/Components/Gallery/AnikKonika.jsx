import { Link } from "react-router-dom";


const AnikKonika = () => {
    return (
        <div>

            <div className="relative lg:flex justify-evenly items-center mt-20">

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src="https://i.ibb.co/0V3xB2Z/image-leaves-01.png" alt="" />
                    <div className="lg:w-[500px] mx-5 py-5">
                        <p className="text-xl">Anik & Konika</p>
                        <h2 className="text-4xl font-lora">Our Story</h2>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards.</p>
                    </div>

                    <Link to ="/galleryDetails"> 
                        <button className="ml-5 btn rounded-full bg-purple-900 hover:bg-purple-800 text-white">View Gallery</button></Link>
                </div>

                <img data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" src="https://i.ibb.co/pQLwCHM/home-04-image-03.png" alt="" />

            </div>
        </div>
    );
};

export default AnikKonika;