import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homePage/HomePage';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <HomePage></HomePage>
            </Outlet>
        </div>
    );
};

export default Root;