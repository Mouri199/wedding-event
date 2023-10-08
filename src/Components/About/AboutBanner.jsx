

const AboutBanner = () => {
    return (
        <div>
            <div>

            </div>
            <div className="bg-purple-100 flex font-roboto justify-evenly items-center">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="absolute top-32 right-[1600px]">
                    <img src="https://i.ibb.co/7YqDGPH/floating-image-02-04.png" alt="" />
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="800" className="relative">
                    <img src="https://i.ibb.co/jrNwpmF/portfolio-04-removebg-preview.png" alt="" />
                </div>
                <div>
                    <p className="w-[700px] text-5xl  font-lora">I belong to my beloved, and my beloved is mine</p>


                </div>
            </div>
        </div>
    );
};

export default AboutBanner;