import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
         <p className="text-4xl sm:text-4xl lg:text-5xl text-center tracking-wide">
            <span className="text-orange-500 to-red-700">INTERNATIONAL EDUCATION</span> ACCREDITATION AUTHORITY
         </p>
         <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            We are a leading accreditation body that provides quality assurance and accreditation services to educational institutions worldwide.
         </p>
         <div className="flex justify-center mt-10">
         <a href="#" className="bg-gradient-to-r from-orange-500 py-3 to-orange-800 py-3  px-4 mx-3 rounded-md">
         Get Your institutions Accredited
         </a>
         <a href="#" className="py-3 px-4 mx-3 rounded-md border">
           Directory
          </a>
         </div>
         <div className="flex mt-10 justify-center">
          <video autoPlay loop muted className="rounded-sm w-1/5 border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video autoPlay loop muted className="rounded-sm w-1/5 border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         </div>
    </div>
  );
};

export default HeroSection  