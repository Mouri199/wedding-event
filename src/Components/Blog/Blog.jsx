import { useEffect, useState } from "react";
import BlogBanner from "./BlogBanner";
import BlogCard from "./BlogCard";


const Blog = () => {

    const [blogInfo,setBlogInfo] = useState([])

    const blogData = () => {
        fetch("blogData.json")
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setBlogInfo(data)

        })
    }
    useEffect(() => {
        blogData()
    })

    console.log(blogInfo);

    return (
      
        <div>
              <BlogBanner></BlogBanner>

              <div className="flex flex-col justify-center gap-10  mt-10">
                {
                    blogInfo.map(showBlog => <BlogCard key={showBlog.id} info={showBlog}></BlogCard> )
                }
              </div>
              
        </div>
    );
};

export default Blog;