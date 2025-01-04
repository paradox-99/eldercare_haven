import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import DonarList from "./DonarList";

const Donation = () => {

    return (
        <div className="pt-[72px]">
            <div className="bg-[url('/donation.png')] bg-no-repeat bg-cover h-[400px]">
                <div className="bg-[#f5830080] w-full h-full flex flex-col items-center justify-center text-white text-center gap-10">
                    <h1 className="text-[80px] leading-[85px] font-bold">Make a Difference in <br /> Someone&rsquo;s Life Today</h1>
                    <Button href='#donate' sx={{ bgcolor: '#00C006', color: "white", px: 4, py: 2, fontWeight: 600, fontSize: 20 }}>Donate Now</Button>
                </div>
            </div>
            <div className="max-w-[1360px] mx-4 md:mx-8 xl:mx-auto mt-20">
                <div>
                    <h1 className="text-secondary text-5xl font-bold mt-5 mb-16 text-center"><span className="text-primary">Where Our</span> Donations Go</h1>
                    <div className="flex items-stretch gap-10 h-[330px] justify-between">
                        <div className="self-start text-center w-[280px] h-[280px] flex flex-col items-center justify-center bg-primary text-white rounded-lg px-4 gap-5">
                            <h1 className="text-5xl font-bold">30%</h1>
                            <p className="text-3xl">Caregiver Training and Salaries</p>
                        </div>
                        <div className="self-end text-center w-[280px] h-[280px] flex flex-col items-center justify-center bg-secondary text-white rounded-lg px-5 gap-5">
                            <h1 className="text-5xl font-bold">20%</h1>
                            <p className="text-3xl">Health and Medical Supplies</p>
                        </div>
                        <div className="self-start text-center w-[280px] h-[280px] flex flex-col items-center justify-center bg-primary text-white rounded-lg px-5 gap-5">
                            <h1 className="text-5xl font-bold">40%</h1>
                            <p className="text-3xl">Meals and Daily Essentials</p>
                        </div>
                        <div className="self-end text-center w-[280px] h-[280px] flex flex-col items-center justify-center bg-secondary text-white rounded-lg px-8 gap-5">
                            <h1 className="text-5xl font-bold">10%</h1>
                            <p className="text-3xl">Facility Maintenance and Utilities</p>
                        </div>
                    </div>
                </div>
                <div id="donate" className="mt-28">
                    <h1 className="text-secondary text-5xl font-bold mt-5 mb-16 text-center"><span className="text-primary">Ready to Make</span> a Difference?</h1>
                    <form>
                        <div className="flex justify-between">
                            <div className="w-1/2 space-y-5">
                                <div className="flex items-center">
                                    <p className="w-56">Donation Amount: </p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '280px' }} />
                                </div>
                                <div className="flex items-center">
                                    <p className="w-56">Email:</p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '280px' }} />
                                </div>
                                <div className="flex items-center">
                                    <p className="w-56">Donor Address: </p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '280px' }} />
                                </div>
                                <div className="flex">
                                    <p className="w-56">Message:</p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" rows={5} sx={{ width: '280px' }} multiline />
                                </div>
                            </div>
                            <div className="w-1/2 space-y-5">
                                <div className="flex items-center">
                                    <p className="w-56">Donor Full Name: </p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '280px' }} />
                                </div>
                                <div className="flex items-center">
                                    <p className="w-56">Donor Phone number: </p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '280px' }} />
                                </div>
                                <div className="flex items-center">
                                    <p className="w-56">Any Specific Donating Area: </p>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '280px' }} />
                                </div>
                                <div className="flex items-center">
                                    <p className="w-56">Donate Anonymously: </p>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                        >
                                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <Button type="submit" variant="contained" sx={{ background: '#F58300', px: 4, py: 1, fontSize: 16, fontWeight: 600 }}>Donate</Button>
                        </div>
                    </form>
                </div>
                <div className="mt-28">
                    <h1 className="text-secondary text-5xl font-bold mt-5 mb-16 text-center"><span className="text-primary">Our</span> Donors</h1>
                    <DonarList></DonarList>
                </div>
            </div>
        </div>
    );
};

export default Donation;