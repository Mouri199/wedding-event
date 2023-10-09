import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsBanner from "./ServiceDetailsBanner";


const ServicesDetails = () => {
    const serviceDetails = useLoaderData();

    const param = useParams();
    const service = serviceDetails.find(services => services.id == param.id)

    return (
        <div>
            <ServiceDetailsBanner></ServiceDetailsBanner>
            <div className="mt-10 px-10">
                <hr className="lg:ml-[620px] mt-16 h-[6px] bg-purple-900 w-[500px]" />
                <p className="lg:ml-[660px] text-3xl font-semibold text-center w-[400px] mt-8"> {service.service_name}</p>
                <hr className="lg:ml-[620px] h-[5px] bg-purple-900 w-[500px] mt-8" />

                <h3 className="text-2xl mt-8 mb-5">{service.details}</h3>
                <div className="grid lg:grid-cols-2">
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image1} alt="" />
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image2} alt="" />
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image3} alt="" />
                    <img className="lg:w-full lg:h-[700px]" src={service.service_image4} alt="" />
                    <img src={service.service_image5} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;