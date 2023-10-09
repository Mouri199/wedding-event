

const ContactBanner = () => {
    return (
        <div>
        <div className="bg-purple-100 lg:flex md:flex grid grid-cols-1 font-roboto justify-evenly items-center">
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="absolute top-32 right-[1400px]">
                <img src="https://i.ibb.co/7YqDGPH/floating-image-02-04.png" alt="" />
            </div>
            <div className="absolute left-[500px]">
                <img src="https://i.ibb.co/9txmW1s/floating-image-16.png" alt="" />
            </div>
            <div data-aos="fade-up"
                data-aos-duration="800" className="relative">
                <img src="https://i.ibb.co/SPCMwxX/gallery-08-removebg-preview.png" alt="" />
            </div>


            <div>
                <p className="lg:w-[700px] lg:text-5xl text-2xl mx-5 mb-5 font-lora">Before you marry a person you should first make them use a computer with slow Internet to see who they really are.</p>


            </div>
        </div>
    </div>
    );
};

export default ContactBanner;