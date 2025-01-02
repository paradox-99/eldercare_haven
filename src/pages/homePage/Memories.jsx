import im1 from "../../assets/images/im1.jpeg";
import im2 from "../../assets/images/im2.png";
import im3 from "../../assets/images/im3.png";
import im4 from "../../assets/images/im4.webp";
import im5 from "../../assets/images/im5 1.png";

const Memories = () => {
     return (
          <div className="mt-28 flex">
               <div className="w-[37%] flex flex-col justify-center">
                    <h3 className="text-xl font-medium">Life at ElderCare Haven</h3>
                    <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12"><span className="text-primary">Memories Captured:</span> Moments of Joy, Care, and Community</h1>
               </div>
               <div className="flex gap-4">
                    <div className="flex flex-col gap-4 w-[272px]">
                         <div className="border-2 border-primary">
                              <img src={im1} alt="" />
                         </div>
                         <div className="border-2 border-primary">
                              <img src={im2} alt="" className="h-[440px]"/>
                         </div>
                    </div>
                    <div className="flex flex-col gap-4 w-[272px]">
                         <div className="border-2 border-primary">
                              <img src={im3} alt="" className="h-[650px]"/>
                         </div>
                    </div>
                    <div className="flex flex-col gap-4 w-[272px]">
                         <div className="border-2 border-primary">
                              <img src={im5} alt="" className="h-[440px]"/>
                         </div>
                         <div className="border-2 border-primary">
                              <img src={im4} alt="" className="w-[272px] h-[190px]"/>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Memories;