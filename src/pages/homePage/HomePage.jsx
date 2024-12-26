import Banner from "./Banner";
import Value from "./Value";
import Welcome from "./Welcome";

const HomePage = () => {
    return (
        <div className="pt-[72px]">
            <Banner></Banner>
            <div className="max-w-[1360px] mx-4 md:mx-8 xl:mx-auto">
                <Welcome></Welcome>
                <Value></Value>
            </div>
        </div>
    );
};

export default HomePage;