import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homePage/HomePage';

const Root = () => {

    const location = useLocation();
    const locationPath = location.pathname.includes('/sign-in') || location.pathname.includes('/sign-up');

    return (
        <div>
            {
                !locationPath && <Navbar></Navbar>
            }
            <Outlet>
                <HomePage></HomePage>
            </Outlet>
        </div>
    );
};

export default Root;