
const Banner = () => {
  return (
    <div>
      <div className="bg-purple-100 flex font-roboto justify-evenly items-center">
        <img data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" src="https://i.ibb.co/CwGpZ29/home-02-image-01.png" alt="" />
        <div  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <p className="w-[500px] text-5xl  font-lora">How To Plan Your Wedding?</p>
          <p className="w-[500px] text-xl font-lora py-5">Congratulations, you’re getting married! This is a time for joy, so definitely take it all in for life.</p>
          <button className="btn bg-purple-900 text-white hover:bg-purple-800">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;