const ClientMoment = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/jDcK97N/1301340.jpg)' }}>
                < div className="lg:flex justify-around items-center hero-overlay bg-white bg-opacity-80 mt-32">
                    <div>
                        <img data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="rounded-full w-[150px] lg:w-[370px] mt-16" src="https://i.ibb.co/CQKKtXM/timeline-1.png" alt="" />
                        <div className="lg:w-[400px] w-[300px] mx-5 lg:text-right mt-10 mb-10">
                            <p className="text-purple-800 font-medium"> THE PLACE WE KISSED</p>
                            <h3 className="text-[#626262] text-2xl font-semibold">OUR FAVORITE SPOT</h3>
                            <p className="italic">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies.</p>
                        </div>
                        <img data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="rounded-full w-[150px]  lg:w-[370px]  mb-10" src="https://i.ibb.co/pwj7T6R/timeline-2.png" alt="" />
                    </div>

                    <div>
                        <div data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="lg:w-[400px] w-[300px] mx-5 mb-10">
                            <p className="text-purple-800 font-medium"> HOW WE MET</p>
                            <h3 className="text-[#626262] text-2xl font-semibold">ONE DAY IN BROOKLYN</h3>
                            <p className="italic" >Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        </div>
                        <img data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="rounded-full w-[150px]  lg:w-[370px]" src="https://i.ibb.co/DCyy7WN/timeline-3.png" alt="" />

                        <div data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="lg:w-[400px] w-[300px] mx-5 mt-10">
                            <p className="text-purple-800 font-medium">    THE ENGAGEMENT</p>
                            <h3 className="text-[#626262] text-2xl font-semibold">
                                SHE SAID YES
                            </h3>
                            <p className="italic mb-5" >At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientMoment;