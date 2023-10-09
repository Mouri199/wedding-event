

const AboutBanner = () => {
    return (
        <div>
            <div>

            </div>
            <div className="bg-purple-100 lg:flex font-roboto justify-evenly items-center">
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
                    <p className="lg:w-[700px] text-2xl mx-5 lg:text-5xl  font-lora">Whatever our souls are made of, his and mine are the same.</p>


                </div>
            </div>
        </div>
    );
};

export default AboutBanner;