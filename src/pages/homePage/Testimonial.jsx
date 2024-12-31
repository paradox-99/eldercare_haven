import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "./style.css";
import pic1 from "../../assets/images/8867 1.png";
import pic2 from "../../assets/images/911 1.png";
import pic3 from "../../assets/images/2147961425 1.png";

const Testimonial = () => {
     return (
          <div className="my-28">
               <h3 className="text-xl font-medium text-center">Hope these will welcome you</h3>
               <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12 text-center"><span className="text-primary">Client&rsquo;s</span> Words</h1>
               <div>
                    <Swiper
                         slidesPerView={3}
                         spaceBetween={30}
                         autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                         }}
                         pagination={{
                              clickable: true,
                         }}
                         modules={[Pagination, Autoplay]}
                         className="mySwiper"
                    >
                         <SwiperSlide>
                              <div className='border-[3px] border-primary p-5'>
                                   <p className='text-justify'>“As a lawyer, I highly recommend Eldercare Heaven for its exceptional care and commitment to seniors&rsquo; well-being. It’s a trusted choice for families seeking the best in eldercare.”</p>
                                   <div className='border-l-2 border-primary mt-14 flex justify-between'>
                                        <div className='pl-4 flex flex-col justify-center'>
                                             <h2 className='text-xl font-semibold'>Catherine</h2>
                                             <p>- Lawyer</p>
                                        </div>
                                        <img src={pic1} alt="" className='rounded-full w-20' />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className='border-[3px] border-primary p-5'>
                                   <p className='text-justify'>“As the manager of Eldercare Heaven, I’m proud to lead a team that ensures every resident receives compassionate care in a nurturing, vibrant environment.”</p>
                                   <div className='border-l-2 border-primary mt-14 flex justify-between'>
                                        <div className='pl-4 flex flex-col justify-center'>
                                             <h2 className='text-xl font-semibold'>Edward</h2>
                                             <p>- Manager</p>
                                        </div>
                                        <img src={pic2} alt="" className='rounded-full w-20' />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className='border-[3px] border-primary p-5'>
                                   <p className='text-justify'>“ElderCare Heaven combines precision and care, offering a supportive environment where my loved ones thrive. The personalized attention and quality service truly set it apart.”</p>
                                   <div className='border-l-2 border-primary mt-14 flex justify-between'>
                                        <div className='pl-4 flex flex-col justify-center'>
                                             <h2 className='text-xl font-semibold'>Mathew</h2>
                                             <p>-  Engineer</p>
                                        </div>
                                        <img src={pic3} alt="" className='rounded-full w-20' />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className='border-[3px] border-primary p-5'>
                                   <p className='text-justify'>“As the manager of Eldercare Heaven, I’m proud to lead a team that ensures every resident receives compassionate care in a nurturing, vibrant environment.”</p>
                                   <div className='border-l-2 border-primary mt-14 flex justify-between'>
                                        <div className='pl-4 flex flex-col justify-center'>
                                             <h2 className='text-xl font-semibold'>Edward</h2>
                                             <p>- Manager</p>
                                        </div>
                                        <img src={pic2} alt="" className='rounded-full w-20' />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className='border-[3px] border-primary p-5'>
                                   <p className='text-justify'>“As a lawyer, I highly recommend Eldercare Heaven for its exceptional care and commitment to seniors&rsquo; well-being. It’s a trusted choice for families seeking the best in eldercare.”</p>
                                   <div className='border-l-2 border-primary mt-14 flex justify-between'>
                                        <div className='pl-4 flex flex-col justify-center'>
                                             <h2 className='text-xl font-semibold'>Catherine</h2>
                                             <p>- Lawyer</p>
                                        </div>
                                        <img src={pic1} alt="" className='rounded-full w-20' />
                                   </div>
                              </div>
                         </SwiperSlide>
                    </Swiper>
               </div>
          </div>
     );
};

export default Testimonial;