
const BlogBanner = () => {
    return (
        <div>
            <div className="bg-purple-100 lg:flex font-roboto justify-evenly items-center">
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
                    <img src="https://i.ibb.co/D5rz976/post-11-1280x640-removebg-preview.png" alt="" />
                </div>


                <div>
                    <p className="lg:w-[700px] text-2xl mx-5 lg:text-5xl  font-lora">All, everything that I understand, I understand only because I love.</p>


                </div>
            </div>
        </div>
    );
};

export default BlogBanner;