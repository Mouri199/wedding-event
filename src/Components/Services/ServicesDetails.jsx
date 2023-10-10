import { Link, useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsBanner from "./ServiceDetailsBanner";


const ServicesDetails = () => {
    const serviceDetails = useLoaderData();

    const param = useParams();
    const service = serviceDetails.find(services => services.id == param.id)

    return (
        <div>
            <ServiceDetailsBanner></ServiceDetailsBanner>
            <div className=" mx-5">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
                <p className="text-center lg:ml-[180px] text-3xl font-semibold my-5"> {service.service_name}  </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
            </div>
            <div className="mt-10 px-10">
                {/* <hr className="lg:ml-[620px] mt-16 h-[6px] bg-purple-900 w-[500px]" />
                <p className="lg:ml-[660px] text-3xl font-semibold text-center w-[400px] mt-8"> </p>
                <hr className="lg:ml-[620px] h-[5px] bg-purple-900 w-[500px] mt-8" /> */}

                <h3 className="text-2xl mt-8 mb-5">{service.details}</h3>
                <div className="grid lg:grid-cols-2">
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image1} alt="" />
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image2} alt="" />
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image3} alt="" />
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image4} alt="" />
                    <img src={service.service_image5} alt="" />
                </div>
                <div className="lg:mx-auto mx-28 lg:max-w-[200px] my-10">
                    <Link to="/contactus"><button className="btn bg-purple-900 hover:bg-purple-800 text-white ">
                        Book now
                    </button></Link>
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;