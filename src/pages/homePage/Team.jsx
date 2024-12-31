import doctors from "../../assets/images/doctors.png";
import nurse from "../../assets/images/nurse.jpeg";
import management from "../../assets/images/management.png";
import staffs from "../../assets/images//staffs.webp";

const Team = () => {
     return (
          <div className="mt-28 mb-10">
               <h3 className="text-xl font-medium text-center">They work Relentlessly</h3>
               <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12 text-center"><span className="text-primary">Our Expertise</span> Team</h1>
               <div className="flex gap-10 justify-center items-center">
                    <div>
                         <img src={doctors} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-secondary text-white text-lg">Doctors</p>
                    </div>
                    <div>
                         <img src={nurse} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-secondary text-white text-lg">Nurse</p>
                    </div>
                    <div>
                         <img src={management} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-secondary text-white text-lg">Management</p>
                    </div>
                    <div>
                         <img src={staffs} alt="" className="w-96 h-52"/>
                         <p className="w-full text-center p-1 font-bold bg-secondary text-white text-lg">Staffs</p>
                    </div>
               </div>
          </div>
     );
};

export default Team;