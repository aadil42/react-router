import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const RootPage = () => {
    return (
        <main>
            <Navigation />
            <Outlet />
        </main>
    )
}

export default RootPage;