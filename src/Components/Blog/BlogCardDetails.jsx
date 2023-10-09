import { useLoaderData, useParams } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiTwotoneTag } from "react-icons/ai";

const BlogCardDetails = () => {

    const blogDetails = useLoaderData();

    const blogParam = useParams();
    const blog = blogDetails.find(blogs => blogs.id == blogParam.id)

    return (
        <div>

            <div className="bg-purple-100 lg:flex font-roboto justify-evenly items-center">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="absolute top-32 right-[1400px]">
                    <img src="https://i.ibb.co/7YqDGPH/floating-image-02-04.png" alt="" />
                </div>
                <div className="absolute left-[300px]">
                    <img src="https://i.ibb.co/9txmW1s/floating-image-16.png" alt="" />
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="800" className="relative">
                    <img src="https://i.ibb.co/8d3kt58/home-01-testimonials-01-removebg-preview.png" alt="" />
                </div>


                <div>
                    <p className="lg:w-[700px] mx-5 text-3xl lg:text-5xl  font-lora">When I saw you I fell in love, and you smiled because you knew.</p>


                </div>
            </div>

            <div className="">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 lg:w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[800px] italic text-center w-[400px] my-5">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 lg:w-[500px]" />
            </div>

            <div className="mx-auto max-w-6xl">
                <div className=" mt-16">
                    <p className=" text-2xl my-5">{blog.blog_name}</p>
                    <h3 className=" text-6xl italic font-lora my-5">{blog.blog_title}</h3>
                </div>

                <div className="mx-auto max-w-[500px]">

                    <img src={blog.blog_image} alt="" />

                </div>

                <p className=" lg my-5">{blog.blog_time}</p>
                <p className="text-lg italic">{blog.blog_details}</p>

                <div className="flex justify-between my-10">
                    <div className="flex gap-3">
                        <p className="flex items-center"><AiTwotoneTag></AiTwotoneTag> BRIDAL</p>
                        <p className="flex items-center"><AiTwotoneTag></AiTwotoneTag>PHOTOGRAPHY</p>
                        <p className="flex items-center"><AiTwotoneTag></AiTwotoneTag> PLANNING</p>

                    </div>
                    <div className="flex gap-4">
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillInstagram></AiFillInstagram>
                        <AiFillTwitterCircle></AiFillTwitterCircle>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogCardDetails;