import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homePage/HomePage';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1360px] mx-auto'>
                <Navbar></Navbar>
            </div>
            <Outlet>
                <HomePage></HomePage>
            </Outlet>
        </div>
    );
};

export default Root;