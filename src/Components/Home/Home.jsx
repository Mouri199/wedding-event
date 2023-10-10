import Pakage from "../Pakage/Pakage";
import Card from "../Card/Card";
import ClientMoment from "../ClientMoment/ClientMoment";
import Banner from "../Banner/Banner";






const Home = () => {
   

    return (
        <div>
         <Banner></Banner>
          
            <section>
                <div className=" lg:ml-40 text-center my-10">
                    <p data-aos="flip-right" className="lg:text-5xl text-2xl font-medium">
                        It’s not just music, It’s Magic!
                    </p>
                   
                </div>


            </section>


            <Pakage></Pakage>

            <Card></Card>
            <ClientMoment></ClientMoment>
        </div>
    );
};

export default Home;