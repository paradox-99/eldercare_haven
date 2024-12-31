import { Button } from "@mui/material";


const Donation = () => {
     return (
          <div className="mt-28 bg-[url('/parallax.jpg')] bg-fixed bg-no-repeat bg-cover bg-center h-[85vh]">
               <div className="bg-[#f5830080] flex flex-col gap-5 items-center justify-center text-white text-center h-full">
                    <h2 className="text-4xl font-semibold">We Are Concerned Every Day</h2>
                    <h1 className="text-8xl font-bold">Our Purpose In Life Is To Help One Another</h1>
                    <p className="text-2xl font-bold w-4/5">Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Volutpat est velit egestas dui. Mauris cursus mattis molestie a iaculis at erat.</p>
                    <div className="mt-10 space-x-20">
                         <Button variant="contained" sx={{width: '180px', background: "#F58300", borderRadius: "50px", height: 50, color: "white", fontWeight: 700}} size="large">Start Donating</Button>
                         <Button variant="contained" sx={{width: '180px', background: "white", borderRadius: "50px", height: 50, color: "black", fontWeight: 700}} size="large">Plan A Visit</Button>
                    </div>
               </div>
          </div>
     );
};

export default Donation;