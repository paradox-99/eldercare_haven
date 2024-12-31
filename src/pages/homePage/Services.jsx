import medical from "../../assets/images/medical facilities.jpg";
import personalized from "../../assets/images/personalized_care.jpg";
import housekeeping from "../../assets/images/house_keeping.jpeg";
import memory from "../../assets/images/memoty_care.jpeg";

const Services = () => {
     return (
          <div className="mt-28">
               <h3 className="text-xl font-medium text-right">Our Services</h3>
               <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12 text-right"><span className="text-primary">We Look</span> After Seniors</h1>
               <div className="flex gap-10 justify-center items-center">
                    <div>
                         <img src={medical} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-primary text-white text-lg">Medical Facilities</p>
                    </div>
                    <div>
                         <img src={personalized} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-primary text-white text-lg">Personalized Care</p>
                    </div>
                    <div>
                         <img src={housekeeping} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-primary text-white text-lg">Housekeeping</p>
                    </div>
                    <div>
                         <img src={memory} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-primary text-white text-lg">Memory Care</p>
                    </div>
               </div>
          </div>
     );
};

export default Services;