

const GalleryFooter = () => {
    return (
        <div>

            <div className="absolute">
                <img src="https://i.ibb.co/JjF8QnK/floating-image-15.png" alt="" />
            </div>
            <div className="absolute left-[1600px]">
                <img src="https://i.ibb.co/9txmW1s/floating-image-16.png" alt="" />
            </div>
            <div className="relative flex justify-center gap-5 mt-32">
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="w-[500px] bg-purple-100 h-[300px] text-center">
                    <p className="text-2xl my-5">Venue</p>
                    <h3 className="text-4xl">The Orchad</h3>
                    <p className="text-xl py-5">At the base of Mt Warning, lies a beautiful macadamia orchard, set along the amazing Oxley River.</p>
                    <p className="hover:underline">Wiew More</p>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="w-[500px] bg-purple-100 h-[300px] text-center">
                    <p className="text-2xl my-5">Accomodation</p>
                    <h3 className="text-4xl">Where to Stay</h3>
                    <p className="text-xl py-5">We have come up with three accommodation options, and you can take your pick for whatever suits you!</p>
                    <p className="hover:underline">View Options</p>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="3000" className="w-[500px] bg-purple-100 h-[300px] text-center">
                    <p className="text-2xl my-5">The Location</p>
                    <h3 className="text-4xl">Getting There</h3>
                    <p className="text-xl py-5">Tow hrs from Brisbane and 3.5 hrs from the Sunshine Coast. 677 Tyalgum Road Eungella NSW 2484.</p>
                    <p className="hover:underline">Wiew More</p>
                </div>


            </div>


        </div>
    );
};

export default GalleryFooter;