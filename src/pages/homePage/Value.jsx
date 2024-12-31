import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import love from "../../assets/icons/love.png";
import cardiogram from "../../assets/icons/cardiogram.png";
import { useState } from "react";
import doc_p from "../../assets/images/doc-p.png";
import doc from "../../assets/images/doc.png";

const Value = () => {

     const [expanded1, setExpanded1] = useState(false);
     const [expanded2, setExpanded2] = useState(false);
     const [expanded3, setExpanded3] = useState(false);
     const [expanded4, setExpanded4] = useState(false);
     const [expanded5, setExpanded5] = useState(false);

     const handleChange1 = (isExpanded) => {
          setExpanded1(isExpanded);
     };
     const handleChange2 = (isExpanded) => {
          setExpanded2(isExpanded);
     };
     const handleChange3 = (isExpanded) => {
          setExpanded3(isExpanded);
     };
     const handleChange4 = (isExpanded) => {
          setExpanded4(isExpanded);
     };
     const handleChange5 = (isExpanded) => {
          setExpanded5(isExpanded);
     };

     return (
          <div className="mt-28 flex gap-5">
               <div className="w-1/2 relative h-[765px]">
                    <div className="w-fit absolute top-0 left-0 border-4 border-primary">
                         <img src={doc} alt=""  className="w-96"/>
                    </div>
                    <div className="w-fit absolute right-10 bottom-0 border-4 border-secondary">
                         <img src={doc_p} alt="" className="w-96 h-[460px]"/>
                    </div>
                    <div className="bg-white py-3 rounded absolute top-[55%] left-[7%] flex gap-5 w-64 justify-center items-center">
                         <p className="text-xl text-justify text-primary font-medium"><span className="font-black text-2xl text-primary">Care</span> that will <br /> <span className="text-secondary">LAST FOREVER</span></p>
                         <img src={love} alt="" className="w-12 h-12"/>
                    </div>
               </div>
               <div className="w-1/2 float-right">
                    <h3 className="text-xl font-medium">Value for Life</h3>
                    <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12"><span className="text-primary">Expert Care</span> of the Elderly</h1>
                    <div className="mt-5">
                         <Accordion
                              // sx={{ backgroundColor: "#f9f9f9", boxShadow: "none",
                              //      "& .css-1o5k77o-MuiButtonBase-root-MuiAccordionSummary-root": {
                              //           padding: 0,
                              //      }
                              // }}
                              expanded={expanded1}
                              onChange={(event, isExpanded) => handleChange1(isExpanded)}
                         >
                              <AccordionSummary
                                   expandIcon={
                                        expanded1 ? (
                                             <img
                                                  src={cardiogram} // Path to your close PNG icon
                                                  alt="Close Icon"
                                                  style={{
                                                       width: 20,
                                                       height: 20 // Rotate 0 degrees
                                                  }}
                                             />
                                        ) : (
                                             <img
                                                  src={love} // Path to your expand PNG icon
                                                  alt="Expand Icon"
                                                  style={{ width: 20, height: 20 }}
                                             />
                                        )
                                   }
                                   aria-controls="panel1-content"
                                   id="panel1-header"
                                   sx={{
                                        flexDirection: "row-reverse", // Move icon to the left
                                        gap: 2,
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                             transform: "none !important", // Disable rotation
                                             transition: "none !important", // Remove animation
                                        }
                                   }}

                              >
                                   <Typography component="span" fontWeight={700}>Competent Staff</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </AccordionDetails>
                         </Accordion>
                         <Accordion
                              // sx={{ backgroundColor: "#f9f9f9", boxShadow: "none",
                              //      "& .css-1o5k77o-MuiButtonBase-root-MuiAccordionSummary-root": {
                              //           padding: 0,
                              //      }
                              // }}
                              expanded={expanded2}
                              onChange={(event, isExpanded) => handleChange2(isExpanded)}
                         >
                              <AccordionSummary
                                   expandIcon={
                                        expanded2 ? (
                                             <img
                                                  src={cardiogram} // Path to your close PNG icon
                                                  alt="Close Icon"
                                                  style={{
                                                       width: 20,
                                                       height: 20 // Rotate 0 degrees
                                                  }}
                                             />
                                        ) : (
                                             <img
                                                  src={love} // Path to your expand PNG icon
                                                  alt="Expand Icon"
                                                  style={{ width: 20, height: 20 }}
                                             />
                                        )
                                   }
                                   aria-controls="panel1-content"
                                   id="panel1-header"
                                   sx={{
                                        flexDirection: "row-reverse", // Move icon to the left
                                        gap: 2,
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                             transform: "none !important", // Disable rotation
                                             transition: "none !important", // Remove animation
                                        },
                                        
                                   }}

                              >
                                   <Typography component="span" fontWeight={700}>Quality Medical Care</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                              Experience exceptional medical care designed for your loved ones’ well-being, with personalized treatments and expert support. We’re dedicated to improving their health and happiness, every step of the way.
                              </AccordionDetails>
                         </Accordion>
                         <Accordion
                              // sx={{ backgroundColor: "#f9f9f9", boxShadow: "none",
                              //      "& .css-1o5k77o-MuiButtonBase-root-MuiAccordionSummary-root": {
                              //           padding: 0,
                              //      }
                              // }}
                              expanded={expanded3}
                              onChange={(event, isExpanded) => handleChange3(isExpanded)}
                         >
                              <AccordionSummary
                                   expandIcon={
                                        expanded3 ? (
                                             <img
                                                  src={cardiogram} // Path to your close PNG icon
                                                  alt="Close Icon"
                                                  style={{
                                                       width: 20,
                                                       height: 20 // Rotate 0 degrees
                                                  }}
                                             />
                                        ) : (
                                             <img
                                                  src={love} // Path to your expand PNG icon
                                                  alt="Expand Icon"
                                                  style={{ width: 20, height: 20 }}
                                             />
                                        )
                                   }
                                   aria-controls="panel1-content"
                                   id="panel1-header"
                                   sx={{
                                        flexDirection: "row-reverse", // Move icon to the left
                                        gap: 2,
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                             transform: "none !important", // Disable rotation
                                             transition: "none !important", // Remove animation
                                        },
                                   }}

                              >
                                   <Typography component="span" fontWeight={700}>Relaxation Techniques</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </AccordionDetails>
                         </Accordion>
                         <Accordion
                              // sx={{ backgroundColor: "#f9f9f9", boxShadow: "none",
                              //      "& .css-1o5k77o-MuiButtonBase-root-MuiAccordionSummary-root": {
                              //           padding: 0,
                              //      }
                              // }}
                              expanded={expanded4}
                              onChange={(event, isExpanded) => handleChange4(isExpanded)}
                         >
                              <AccordionSummary
                                   expandIcon={
                                        expanded4 ? (
                                             <img
                                                  src={cardiogram} // Path to your close PNG icon
                                                  alt="Close Icon"
                                                  style={{
                                                       width: 20,
                                                       height: 20 // Rotate 0 degrees
                                                  }}
                                             />
                                        ) : (
                                             <img
                                                  src={love} // Path to your expand PNG icon
                                                  alt="Expand Icon"
                                                  style={{ width: 20, height: 20 }}
                                             />
                                        )
                                   }
                                   aria-controls="panel1-content"
                                   id="panel1-header"
                                   sx={{
                                        flexDirection: "row-reverse", // Move icon to the left
                                        gap: 2,
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                             transform: "none !important", // Disable rotation
                                             transition: "none !important", // Remove animation
                                        },
                                   }}

                              >
                                   <Typography component="span" fontWeight={700}>Amazing Ambience</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </AccordionDetails>
                         </Accordion>
                         <Accordion
                              // sx={{ backgroundColor: "#f9f9f9", boxShadow: "none",
                              //      "& .css-1o5k77o-MuiButtonBase-root-MuiAccordionSummary-root": {
                              //           padding: 0,
                              //      }
                              // }}
                              expanded={expanded5}
                              onChange={(event, isExpanded) => handleChange5(isExpanded)}
                         >
                              <AccordionSummary
                                   expandIcon={
                                        expanded5 ? (
                                             <img
                                                  src={cardiogram} // Path to your close PNG icon
                                                  alt="Close Icon"
                                                  style={{
                                                       width: 20,
                                                       height: 20 // Rotate 0 degrees
                                                  }}
                                             />
                                        ) : (
                                             <img
                                                  src={love} // Path to your expand PNG icon
                                                  alt="Expand Icon"
                                                  style={{ width: 20, height: 20 }}
                                             />
                                        )
                                   }
                                   aria-controls="panel1-content"
                                   id="panel1-header"
                                   sx={{
                                        flexDirection: "row-reverse", // Move icon to the left
                                        gap: 2,
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                             transform: "none !important", // Disable rotation
                                             transition: "none !important", // Remove animation
                                        },
                                   }}

                              >
                                   <Typography component="span" fontWeight={700}>Excellent Cuisine</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </AccordionDetails>
                         </Accordion>
                    </div>
               </div>
          </div>
     );
};

export default Value;