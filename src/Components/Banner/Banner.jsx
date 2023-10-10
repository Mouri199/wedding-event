import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="bg-purple-100 lg:flex font-roboto justify-evenly items-center">
        <img className="w-[400px]" src="https://i.ibb.co/CwGpZ29/home-02-image-01.png" alt="" />
        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <p className="lg:w-[500px] w-[300px] mx-24 lg:mx-0 text-3xl lg:text-5xl font-lora">How To Plan Your Wedding?</p>
          <p className="lg:w-[500px] w-[350px] mx-9 lg:text-xl  font-lora py-5">Congratulations, you’re getting married! This is a time for joy, so definitely take it all in for life.</p>
          <Link to="/contactUs"> <button className="btn ml-40  lg:ml-0 mb-5 bg-purple-900 text-white hover:bg-purple-800">
            contact us
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;