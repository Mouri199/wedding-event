
const Card = () => {
    return (
        <div>

            <div className=" mx-5">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[800px] italic text-center mx-4 w-[330px] lg:w-[400px] my-5">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
            </div>
            <div className="lg:flex gap-10 items-center">

                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="lg:ml-60 mt-20 lg:w-[800px] w-[350px] mx-10 lg:h-[700px]" src="https://i.ibb.co/2Y2XCH6/flower.jpg" alt="" />

                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <p className="text-xl lg:text-3xl italic mx-5 w-[200px]lg:w-[700px]">When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.
                        <br /> — <span className="font-semibold">Harry</span></p>
                </div>
            </div>

            <div className="lg:flex lg:ml-60 gap-10 items-center mt-20">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <p className="text-xl lg:text-3xl italic mx-5 w-[400px] mb-5 lg:w-[700px]" >The things that you have done for me, to help me, support me, surprise me, to make me happy, go above and beyond what any person deserves. Youre all I need. I love you and I like you.
                        <br /> — <span className="font-semibold">Leslie</span></p>
                </div>
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="w-[350px] lg:w-[500px] mx-10 lg:h-[800px]" src="https://i.ibb.co/jMd0FX5/flower2.jpg" alt="" />
            </div>




            <div className=" mx-5">
                <hr className="lg:ml-[760px] mt-10 h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[800px] italic text-center mx-4 w-[330px] lg:w-[400px] my-5">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[760px]  h-[5px] bg-purple-900 w-[370px] lg:w-[500px]" />
            </div>
        </div >

    )
};

export default Card;