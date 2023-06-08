import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <h1>homepage</h1>
            <Link to="/products">go to products</Link>
        </>
    );
}

export default Homepage;