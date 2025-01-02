import Banner from "./Banner";
import Blog from "./Blog";
import Donation from "./Donation";
import Living from "./Living";
import Memories from "./Memories";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Value from "./Value";
import Welcome from "./Welcome";

const HomePage = () => {
    return (
        <div className="pt-[72px]">
            <Banner></Banner>
            <div className="max-w-[1360px] mx-4 md:mx-8 xl:mx-auto">
                <Welcome></Welcome>
                <Value></Value>
                <Services></Services>
                <Memories></Memories>
                <Living></Living>
                <Team></Team>
                <Blog></Blog>
            </div>
            <Donation></Donation>
            <div className="max-w-[1360px] mx-4 md:mx-8 xl:mx-auto">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default HomePage;