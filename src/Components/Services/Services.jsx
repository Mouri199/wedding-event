import { useLoaderData } from "react-router-dom";
import Service from "./Service";
// import Slider from "../Slider/Slider";
import ServiceBanner from "./ServiceBanner";

const Services = () => {
    const info = useLoaderData()


    return (
        <div>
            <ServiceBanner></ServiceBanner>

            <div className=" mx-5">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[800px] italic text-center mx-4 w-[330px] lg:w-[400px] my-5">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
            </div>

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-5 lg:px-40">
                {

                    info.map(item => <Service key={item.id} Service={item} ></Service>)
                }
            </div>


            <div className=" mx-5">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[800px] italic text-center mx-4 w-[330px] lg:w-[400px] my-5">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
            </div>
{/* 
            <div className="lg:block hidden"><Slider></Slider></div> */}
        </div>
    );
};

export default Services;