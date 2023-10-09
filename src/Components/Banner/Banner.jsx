import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="bg-purple-100 lg:flex font-roboto justify-evenly items-center">
        <img data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" src="https://i.ibb.co/CwGpZ29/home-02-image-01.png" alt="" />
        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <p className="lg:w-[500px] text-3xl lg:text-5xl ml-3 font-lora">How To Plan Your Wedding?</p>
          <p className="lg:w-[500px] lg:text-xl ml-3 font-lora py-5">Congratulations, you’re getting married! This is a time for joy, so definitely take it all in for life.</p>
          <Link to="/contactUs"> <button className="btn ml-32 lg:ml-3 mb-5 bg-purple-900 text-white hover:bg-purple-800">
            contact us
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;