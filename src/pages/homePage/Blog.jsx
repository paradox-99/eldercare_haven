import { Button } from "@mui/material";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog_2.jpg";
import blog3 from "../../assets/images/blog-3.webp";

const Blog = () => {
     return (
          <div className="mt-28">
               <h3 className="text-xl font-medium text-center">All News Around Us</h3>
               <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12 text-center"><span className="text-primary">Our</span> Blog</h1>
               <div className="flex gap-10 ">
                    <div className="w-[425px] ">
                         <img src={blog1} alt="" className='w-[430px] h-[280px]'/>
                         <p className="mt-3 font-medium">November 2, 2024</p>
                         <h3 className="font-bold text-xl mt-3 mb-4">Seniors Home is a good place to retire!</h3>
                         <p className="line-clamp-3">A Senior Home offers the perfect balance of comfort, care, and community for a fulfilling retirement. With personalized support and engaging activities, it&rsquo;s the ideal place to embrace the golden years with peace and joy....</p>
                         <div className="float-right mt-5">
                              <Button variant="outlined" sx={{border: '3px solid #F58300', borderRadius: "0px"}}>Read More</Button>
                         </div>
                    </div>
                    <div className="w-[425px] ">
                         <img src={blog2} alt="" className='w-[430px] h-[280px]'/>
                         <p  className="mt-3 font-medium">June 20, 2024</p>
                         <h3 className="font-bold text-xl mt-3 mb-4">Caring for the elderly by gerontological nurse</h3>
                         <p className="line-clamp-3">Gerontological nurses specialize in caring for the elderly, providing expert care to improve their physical, emotional, and mental well-being...</p>
                         <div className="float-right mt-5">
                              <Button variant="outlined" sx={{border: '3px solid #F58300', borderRadius: "0px"}}>Read More</Button>
                         </div>
                    </div>
                    <div className="w-[425px] ">
                         <img src={blog3} alt="" className='w-[430px] h-[280px]'/>
                         <p className="mt-3 font-medium">November 2, 2023</p>
                         <h3 className="font-bold text-xl mt-3 mb-4">Ageing gracefully is a conscious decision</h3>
                         <p className="line-clamp-3">Ageing gracefully is a conscious choice that goes beyond just looking good - it&rsquo;s about embracing life with positivity, health, and purpose. By making mindful decisions each day, we can navigate the journey of aging with ...</p>
                         <div className="float-right mt-5">
                              <Button variant="outlined" sx={{border: '3px solid #F58300', borderRadius: "0px"}}>Read More</Button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Blog;