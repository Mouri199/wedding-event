import AbirNatasa from "./AbirNatasa";
import AnikKonika from "./AnikKonika";
import AnnaPaul from "./AnnaPaul";
import GalleryFooter from "./GalleryFooter";


const Gallery = () => {
    return (
        <div>
            <div className="bg-purple-100 lg:flex font-roboto text-5xl justify-evenly items-center">
              
                <p data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="lg:w-[500px] mx-5 font-lora">The best thing to hold onto in life is each other.</p>
                      <img data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" src="https://i.ibb.co/WnCnd83/home-04-image-01-13.png" alt="" />
            </div>

            <AbirNatasa></AbirNatasa>
            <AnikKonika></AnikKonika>
            <AnnaPaul></AnnaPaul>
            <GalleryFooter></GalleryFooter>


        </div>
    );
};

export default Gallery;