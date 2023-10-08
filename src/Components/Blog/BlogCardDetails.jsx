import { useLoaderData, useParams } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiTwotoneTag } from "react-icons/ai";

const BlogCardDetails = () => {

    const blogDetails = useLoaderData();

    const blogParam = useParams();
    const blog = blogDetails.find(blogs => blogs.id == blogParam.id)

    return (
        <div>
            <div>
                <hr className="lg:ml-[760px] mt-20 h-[5px] bg-purple-900 w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[850px] italic text-center w-[400px] mt-8">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[800px] h-[5px] bg-purple-900 w-[500px] mt-10" />
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