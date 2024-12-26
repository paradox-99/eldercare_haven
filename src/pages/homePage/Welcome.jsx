import atmosphere from "../../assets/icons/planet-earth.png";
import medical from "../../assets/icons/nursing-room.png";
import staff from "../../assets/icons/staff_2795229.png";
import yoga from "../../assets/icons/yoga.png";
import living from "../../assets/icons/living-room_4783009.png";
import food from "../../assets/icons/balanced-diet.png";

const Welcome = () => {
     return (
          <div className="mt-28">
               <h3 className="text-xl font-bold text-center">Welcome to ElderCare Haven</h3>
               <h1 className="text-secondary text-5xl font-extrabold text-center mt-3"><span className="text-primary">We make a </span> Difference in your lives</h1>
               <p className="text-center max-w-[85%] mx-auto mt-4 px-5">It is difficult to pinpoint the exact age when an adult becomes a geriatric patient. It is a gradual process that enforces the need for some kind of support by family or medical staff without which, the patient may be worse off.</p>
               <div className="flex flex-wrap justify-center mt-10 gap-6">
                    <div className="flex max-w-[430px] gap-4 h-36">
                         <img src={atmosphere} alt="" className="w-20 h-20"/>
                         <div>
                              <h3 className="text-lg font-bold">Amazing Atmosphere</h3>
                              <div className="w-12 h-0.5 bg-secondary"></div>
                              <p>An ideal eldercare center is warm and engaging, with cozy spaces, activities, and social events that promote comfort and connection.</p>
                         </div>
                    </div>
                    <div className="flex max-w-[430px] gap-4 h-36">
                         <img src={medical} alt="" className="w-20 h-20"/>
                         <div>
                              <h3 className="text-lg font-bold">Latest Medical Care</h3>
                              <div className="w-12 h-0.5 bg-secondary"></div>
                              <p>We offer advanced care with health monitoring, therapy, and treatments, focusing on telemedicine and wellness for better health.</p>
                         </div>
                    </div>
                    <div className="flex max-w-[430px] gap-4 h-36">
                         <img src={staff} alt="" className="w-20 h-20"/>
                         <div>
                              <h3 className="text-lg font-bold">Courteous & Caring Staff</h3>
                              <div className="w-12 h-0.5 bg-secondary"></div>
                              <p>Courteous, caring staff provide personalized support and thrive with training, teamwork, and a positive work environment.</p>
                         </div>
                    </div>
                    <div className="flex max-w-[430px] gap-4 h-36">
                         <img src={yoga} alt="" className="w-20 h-20"/>
                         <div>
                              <h3 className="text-lg font-bold">Yoga For Relaxation</h3>
                              <div className="w-12 h-0.5 bg-secondary"></div>
                              <p>Gentle yoga and meditation in a calm space promote relaxation and well-being for elders.</p>
                         </div>
                    </div>
                    <div className="flex max-w-[430px] gap-4 h-36">
                         <img src={living} alt="" className="w-20 h-20"/>
                         <div>
                              <h3 className="text-lg font-bold">Cozy Living Areas</h3>
                              <div className="w-12 h-0.5 bg-secondary"></div>
                              <p>We offer cozy, personalized spaces with comfort, natural light, and greenery to enhance a homely and supportive atmosphere.</p>
                         </div>
                    </div>
                    <div className="flex max-w-[430px] gap-4 h-36">
                         <img src={food} alt="" className="w-20 h-20"/>
                         <div>
                              <h3 className="text-lg font-bold">Healthy Eating Choices</h3>
                              <div className="w-12 h-0.5 bg-secondary"></div>
                              <p>We offer nutrient-rich meals with fruits, vegetables, and lean proteins, tailored to support health and dietary needs.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Welcome;