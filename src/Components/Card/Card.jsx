
const Card = () => {
    return (
        <div>
            <div className="flex gap-10 items-center">

                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="lg:ml-60 mt-20 lg:w-[800px] lg:h-[700px]" src="/public/flower.jpg" alt="" />

                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <p className="text-3xl italic lg:w-[700px]">When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.
                   <br /> — <span className="font-semibold">Harry, When Harry Met Sally</span></p>
                </div>
            </div>

            <div className="flex lg:ml-60 gap-10 items-center mt-20">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <p className="text-3xl italic lg:w-[700px]" >The things that you have done for me, to help me, support me, surprise me, to make me happy, go above and beyond what any person deserves. Youre all I need. I love you and I like you.
                    <br /> — <span className="font-semibold">Leslie, Parks and Recreation</span></p>
                </div>
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="h-[800px]" src="/public/flower2.jpeg" alt="" />
            </div>

            <div className="text-center">
                <hr className="lg:ml-[770px] mt-20 h-[5px] bg-purple-900 w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[850px] italic text-center w-[400px] mt-8">Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.
                   <br /> <span className="not-italic font-semibold">Maya Angelou</span> </p>
                <hr className="lg:ml-[800px] h-[5px] bg-purple-900 w-[500px] mt-10" />
            </div>
        </div>
    );
};

export default Card;