import Pakage from "../Pakage/Pakage";
import Card from "../Card/Card";
import ClientMoment from "../ClientMoment/ClientMoment";
import Banner from "../Banner/Banner";






const Home = () => {
   

    return (
        <div>
         <Banner></Banner>
            {/* <Slider></Slider> */}
            <section>
                <div className=" lg:ml-40 text-center my-10">
                    <p data-aos="flip-right" className="lg:text-5xl text-2xl font-medium">
                        It’s not just music, It’s Magic!
                    </p>
                   
                </div>


            </section>


            <Pakage></Pakage>


            <div>
                <hr className="lg:ml-[760px] mt-20 h-[5px] bg-purple-900 w-[500px]" />
                <p data-aos="flip-up" className="lg:ml-[850px] italic text-center w-[400px] mt-8">“Absolutely loved the monogram personalization! Loved the audio recordings you captured, what a wonderful surprise”
                    <br />  <span className="not-italic font-semibold">  Mr. & Mrs. Rogers | Palmer, AK</span> </p>
                <hr className="lg:ml-[800px] h-[5px] bg-purple-900 w-[500px] mt-10" />
            </div>

            <Card></Card>
            <ClientMoment></ClientMoment>
        </div>
    );
};

export default Home;