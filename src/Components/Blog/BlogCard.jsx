import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const BlogCard = ({ info }) => {
    const { id,blog_image, blog_name, blog_title, blog_time, short } = info || {}
    return (
        <div className="mx-auto">
            <div>
                <div>
                    <img src={blog_image} alt="" />
                    <div className="w-[600px]">
                        <p className="text-xl my-5">{blog_name}</p>
                        <h3 className="text-4xl italic font-lora my-5">{blog_title}</h3>
                        <p className="lg my-5">{blog_time}</p>
                        <p className="text-sm italic">{short}</p>
                    </div>
                    <div className="flex justify-between my-5">
                        <div className="flex gap-5">
                            <AiFillInstagram></AiFillInstagram>
                            <AiFillTwitterCircle></AiFillTwitterCircle>
                            <AiFillFacebook></AiFillFacebook>
                        </div>
                        <p className="hover:underline"><Link to={`/blogCardDetails/${id}`}>Read more..</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogCard;