import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';


const ProductDetailsPage = () => {
    const params = useParams();

    return (
        <>
            <h1>product Details</h1>
            {params.productId}
        </>
    );
}

export default ProductDetailsPage;