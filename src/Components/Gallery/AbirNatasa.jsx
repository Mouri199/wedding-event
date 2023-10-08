import { Link } from "react-router-dom";

const AbirNatasa = () => {
    return (
        <div>
            <div className="absolute top-[950px] mt-10">

                <img src="https://i.ibb.co/qp6Vs26/floating-image-09.png" alt="" />
            </div>
            <div className="relative flex justify-evenly items-center mt-20">
                <img data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" src="https://i.ibb.co/VmbZ0Hn/home-02-image-02.png" alt="" />
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src="" alt="" />
                    <div className="w-[500px] py-5">
                        <p className="text-xl">Abir & Natasha</p>
                        <h2 className="text-4xl font-lora">Our Story</h2>
                        <p>When I first saw you, I knew that you had a flame in your heart. And under our blue skies, marble movie skies, I found a home in your eyes, we’ll never be apart.
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new.</p>
                    </div>

                    <Link to ="/galleryDetails"> 
                        <button className="btn rounded-full bg-purple-900 hover:bg-purple-800 text-white">View Gallery</button></Link>
                </div>

            </div>
        </div>
    );
};

export default AbirNatasa;