import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

const Root = () => {

    const location = useLocation();
    const locationPath = location.pathname.includes('/sign-in') || location.pathname.includes('/sign-up');

    return (
        <div>
            {
                !locationPath && <Navbar></Navbar>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Root;