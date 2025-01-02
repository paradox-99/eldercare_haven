import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google2.png"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const Signin = () => {

    const { handleEmailLogin, handleGoogleLogin } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await handleEmailLogin(email, password);
            toast.success("Log in successful.")
            navigate(location.state ? location.state : '/');
        }
        catch (error) {
            toast.error('Login failed.')
        }
    }

    const googleLogin = async () => {
        try {
            const result = await handleGoogleLogin();
            toast.success("Log in successful.")
            navigate(location.state ? location.state : '/');
        }
        catch (error) {
            toast.error('Login failed.')
            console.log(error);

        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <PropagateLoader
                color="#F58300"
                speedMultiplier={1}
            />
        </div>
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Helmet>
                <title>Sign in </title>
            </Helmet>
            <div className="flex items-center gap-2 mb-10">
                <img src="/ECH_logo.png" alt="" className="w-20" />
                <h1 className="text-[54px] font-bold">Elder<span className='text-secondary'>Care</span> Haven</h1>
            </div>
            <div className="lg:border rounded-lg lg:shadow-md lg:w-1/4 h-fit px-10 py-6 mb-10">
                <h1 className="text-3xl text-center mb-5 font-bold">Sign in</h1>
                <div className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <TextField id="email" label="Email" variant="outlined" type="email" fullWidth size="small" />
                        <FormControl variant="outlined" fullWidth size="small">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                size="small"
                            />
                        </FormControl>
                        <div className="">
                            <Link className="hover:underline">Forgotten password?</Link>
                        </div>
                        <Button variant="contained" type="submit" fullWidth sx={{ backgroundColor: '#F58300', color: "white", fontWeight: 700 }}>Sign in</Button>
                    </form>
                    <div>
                        <p className="text-center">Don&rsquo;t have an account? <Link to={'/sign-up'} state={location.pathname} className="text-[#F58300]">Create new</Link></p>
                    </div>
                    <Divider>OR</Divider>
                    <div className="w-full">
                        <Link onClick={googleLogin}>
                            <div className="border border-gray-400 rounded p-2 flex gap-2 text-lg font-medium justify-center items-center">
                                <img src={google} alt="" className="w-6" />
                                <p>Sign in with Google</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-between">
                <Button variant="contained" href={"/"} sx={{ backgroundColor: '#F58300', color: "white", fontWeight: 700 }}>Home</Button>
                <Button variant="contained" href={location.state} sx={{ backgroundColor: '#F58300', color: "white", fontWeight: 700 }}>Back</Button>
            </div>
        </div>
    );
};

export default Signin;